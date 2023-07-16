<template>
	<div class="contenedor_todo">
		<div
			class="row"
			style="justify-content: center;height: 100vh !important;"
		>
			<div class="col-12">
				<q-card class="my-card" style="height: 100%;">
					<q-card-section horizontal>
						<q-card-section
							style="min-width: 55vw;min-height: 100vh;"
						>
							<q-card-section
								style="padding-bottom: 0px"
								class="q-px-xl"
							>
								<div class="row">
									<div class="col-6">
										<q-input
											style="font-size: 1vw"
											dense
											standout
											required
											label="Name"
											v-model="name"
											class="q-py-md "
										/>
									</div>
									<div class="col-6 q-pl-md">
										<q-input
											style="font-size: 1vw"
											dense
											standout
											label="Email"
											v-model="email"
											class="q-py-md"
										/>
									</div>
								</div>
								<div class="row">
									<div class="col-6">
										<q-input
											style="font-size: 1vw"
											dense
											standout
											label="City"
											v-model="city"
											class="q-py-md"
										/>
									</div>
									<div class="col-6 q-pl-md">
										<q-input
											style="font-size: 1vw"
											dense
											standout
											required
											label="Country"
											v-model="country"
											class="q-py-md "
										/>
									</div>
								</div>
								<div class="row">
									<div class="col-6">
										<q-input
											style="font-size: 1vw"
											dense
											standout
											label="Facebook"
											v-model="facebook"
											class="q-py-md"
										/>
									</div>
									<div class="col-6 q-pl-md">
										<q-input
											style="font-size: 1vw"
											dense
											standout
											required
											label="Instagram"
											v-model="instagram"
											class="q-py-md "
										/>
									</div>
								</div>
								<div class="row">
									<div class="col-6">
										<q-input
											style="font-size: 1vw"
											dense
											standout
											label="Whatsapp"
											v-model="whatsapp"
											class="q-py-md"
										/>
									</div>
									<div class="col-6 q-pl-md">
										<q-input
											style="font-size: 1vw"
											dense
											standout
											required
											label="Phone"
											v-model="phone"
											class="q-py-md "
										/>
									</div>
								</div>
								<div class="row">
									<div class="col-6">
										<q-input
											style="font-size: 1vw"
											dense
											standout
											label="Close relative"
											v-model="close_relative"
											class="q-py-md"
										/>
									</div>
									<div class="col-6 q-pl-md">
										<q-select
											style="font-size: 1vw"
											dense
											standout
											required
											v-model="relationship"
											:options="relations"
											label="Relationship"
											class="q-py-md"
										/>
									</div>
								</div>

								<q-input
									style="font-size: 1vw"
									dense
									standout
									required
									label="Wallet"
									v-model="wallet"
									class="q-py-md"
								/>
								<q-input
									style="font-size: 1vw"
									dense
									standout
									required
									label="Image"
									v-model="img"
									class="q-py-md"
								/>
								<q-input
									style="font-size: 1vw"
									dense
									standout
									required
									label="Password"
									v-model="password"
									class="q-py-md"
								/>
							</q-card-section>

							<q-card-section align="center">
								<q-btn
									unelevated
									rounded
									color="primary"
									label="Send message"
									@click="send"
									icon="mail"
								/>
							</q-card-section>
						</q-card-section>

						<q-separator vertical />

						<q-card-section
							class="q-pa-lg"
							style="background: #bbb;width: 100%;"
						>
							<div
								class="q-pa-lg"
								style="background: #fff;min-height: 100%;"
							>
								<p>{{ lorem }}</p>
								<p>Name: {{ name }}</p>
								<p>email: {{ email }}</p>
								<p>city: {{ city }}</p>
								<p>country: {{ country }}</p>
								<p>facebook: {{ facebook }}</p>
								<p>instagram: {{ instagram }}</p>
								<p>close_relative: {{ close_relative }}</p>
								<p>relationship: {{ relationship.value }}</p>
								<p>wallet: {{ wallet }}</p>
								<p>img: {{ img }}</p>
								<p>whatsapp: {{ whatsapp }}</p>
								<p>password: {{ password }}</p>
							</div>
						</q-card-section>
					</q-card-section>
				</q-card>
			</div>
		</div>
	</div>
</template>

<script src="./mail.js">
export default {
    name: 'mail',
}
</script>

<style lang="stylus">
@import './mail.styl'
</style>
