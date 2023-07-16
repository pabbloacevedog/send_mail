import Vue from "vue";
import { mapGetters } from "vuex";
export default Vue.component("Mail", {
	$validates: true,
	data() {
		return {
			email: "email",
			name: "name",
			wallet: "wallet",
			instagram: "instagram",
			facebook: "facebook",
			img: "img",
			close_relative: "close_relative",
			city: "city",
			phone: "phone",
			country: "country",
			whatsapp: "whatsapp",
			password: "password",
			relationship: "mother",
			relations: [
				{
					label: "mother",
					value: "mother"
				},
				{
					label: "father",
					value: "father"
				},
				{
					label: "daughter",
					value: "daughter"
				},
				{
					label: "husband",
					value: "husband"
				},
				{
					label: "wife",
					value: "wife"
				},
				{
					label: "brother",
					value: "brother"
				},
				{
					label: "sister",
					value: "sister"
				},
				{
					label: "grandfather",
					value: "grandfather"
				},
				{
					label: "grandmother",
					value: "grandmother"
				},
				{
					label: "grandson",
					value: "grandson"
				},
				{
					label: "granddaughter",
					value: "granddaughter"
				},
				{
					label: "uncle",
					value: "uncle"
				},
				{
					label: "aunt",
					value: "aunt"
				}
			],
			lorem: "Estos son tus datos: "
		};
	},
	computed: {
		...mapGetters({ sendMail: "Mail/sendMail" })
	},
	methods: {
		async send() {
			const {
				email,
				name,
				wallet,
				instagram,
				facebook,
				img,
				close_relative,
				relationship,
				city,
				country,
				phone,
				whatsapp,
				password
			} = this;
			if (email) {
				this.$q.loading.show();
				await this.$store
					.dispatch("Mail/mail", {
						email,
						name,
						wallet,
						instagram,
						facebook,
						img,
						close_relative,
						relationship,
						city,
						country,
						phone,
						whatsapp,
						password
					})
					.then(res => {
						this.$q.loading.hide();
						if (!this.sendMail) {
							var message = this.error.message.replace(
								"GraphQL error: ",
								""
							);
							this.$q.notify({
								message: message,
								timeout: 3000,
								type: "negative", // Available values: 'positive', 'negative', 'warning', 'info'
								position: "bottom",
								icon: "report_problem"
							});
						} else {
							this.$q.notify({
								message:
									"Su password ha sido enviada al email " +
									email,
								timeout: 3000,
								type: "positive", // Available values: 'positive', 'negative', 'warning', 'info'
								position: "bottom",
								icon: "done_all"
							});
							this.email = "";
						}
					})
					.catch(err => {
						console.log(err);
					});
			} else {
				this.$q.notify({
					message: "Ingrese un email válido",
					timeout: 3000,
					type: "negative", // Available values: 'positive', 'negative', 'warning', 'info'
					position: "bottom",
					icon: "report_problem"
				});
			}
		}
	}
});
