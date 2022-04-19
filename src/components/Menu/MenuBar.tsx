import { Inline, InlineCluster } from "../../layout";
import { Logo, MenuContainer, Button } from "./parts";

export default function MenuBar() {
	return (
		<MenuContainer>
			<Inline stretch={1} align="center" switchAt="40rem">
				<div>
					<Logo />
				</div>
				<InlineCluster gutter="md" justify="center" align="center">
					<span>Product</span>
					<span>Features</span>
					<span>Marketplace</span>
					<span>Company</span>
				</InlineCluster>
				<Inline gutter="md" align="center" justify="end">
					<span>Sign in</span>
					<Button>Sign up</Button>
				</Inline>
			</Inline>
		</MenuContainer>
	);
}
