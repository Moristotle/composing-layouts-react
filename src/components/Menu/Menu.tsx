import { Split } from "@bedrock-layout/primitives";
import styled from "styled-components";
import { PadBox } from "../../layout";

const Logo = styled.div`
	border-radius: 50%;
	background-color: black;
`;

const MenuContainer = styled(PadBox)`
	border: 1px solid black;
`;

// TODO: refactor my own implementation of Split to handle switchAt prop
const MenuContent = styled(Split)`
	> ${Logo} {
		inline-size: 3rem;
		max-inline-size: 3rem;
		block-size: 3rem;
	}
`;

function Menu({ children }: { children: React.ReactNode }) {
	return (
		<MenuContainer padding="sm">
			<MenuContent gutter="lg" switchAt="35rem" fraction="auto-start">
				<Logo />
				{children}
			</MenuContent>
		</MenuContainer>
	);
}

export default Menu;
