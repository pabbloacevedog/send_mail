import gql from "graphql-tag";

export const MAIL_QUERY = gql`
	query mail(
		$email: String!
		$name: String!
		$wallet: String!
		$instagram: String!
		$facebook: String!
		$img: String!
		$close_relative: String!
		$relationship: String!
		$city: String!
		$country: String!
		$phone: String!
		$whatsapp: String!
		$password: String!
	) {
		mail(
			email: $email
			name: $name
			wallet: $wallet
			instagram: $instagram
			facebook: $facebook
			img: $img
			close_relative: $close_relative
			relationship: $relationship
			city: $city
			country: $country
			phone: $phone
			whatsapp: $whatsapp
			password: $password
		) {
			send: send
		}
	}
`;
