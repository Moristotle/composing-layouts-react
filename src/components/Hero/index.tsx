import { Cover, InlineCluster, PadBox, Stack } from "../../layout";
import { Button } from "./parts";

export default function Hero() {
	return (
		<Cover
			as={PadBox}
			padding="lg"
			top={
				<InlineCluster gutter="xl" justify="end">
					<span>Places to stay</span>
					<span>Popular experiences</span>
					<span>Manage your booking</span>
					<span>List your property</span>
				</InlineCluster>
			}
			bottom={
				<InlineCluster gutter="xl" justify="center">
					<a href="/#">Keep Reading to learn more</a>
				</InlineCluster>
			}
		>
			<Stack gutter="lg">
				<h1>Home4Hire</h1>
				<span>Stay here and relax</span>
				<InlineCluster gutter="lg">
					<Button primary>Get started</Button>
					<Button>Sign in</Button>
				</InlineCluster>
			</Stack>
		</Cover>
	);
}
