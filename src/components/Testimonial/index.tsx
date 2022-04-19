import { Center, Stack } from "../../layout";
import { Attribution } from "./parts";

export default function Testimonial() {
	return (
		<Center as={Stack} gutter="xl" maxWidth="60ch" centerChildren centerText>
			<h2>Home4Hire</h2>
			<p>
				"Lorem ipsum dolor sit amet, nibh lorem convenire quo et. Usu ea libris
				omittantur. Dicta theophrastus ad mei. Dicat appetere at vis, qui ne
				scripta docendi."
			</p>
			<Attribution />
		</Center>
	);
}
