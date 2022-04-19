import { Stack } from "../../layout";

export default function Subscription() {
	return (
		<Stack gutter="xl">
			<Stack gutter="md">
				<h2>Subscribe To Our Newsletter</h2>
				<p>
					Subscribe to our newsletter to keep up to date on all our amazing
					products.
				</p>
			</Stack>

			<Stack gutter="md">
				<Stack gutter="sm">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" />
				</Stack>

				<Stack gutter="sm">
					<label htmlFor="email">Email</label>
					<input type="text" id="email" />
				</Stack>

				<button>Subscribe</button>
			</Stack>
		</Stack>
	);
}
