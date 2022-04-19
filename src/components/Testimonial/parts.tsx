import styled from "styled-components";
import { Frame, Split } from "../../layout";

const LogoImg = styled.img`
	border-radius: 50%;
`;

const Wrapper = styled(Split)`
	align-items: center;
	> [data-bedrock-layout-frame] {
		min-width: 3rem;
	}
`;

export const Attribution = () => (
	<Wrapper fraction="auto-start" gutter="lg">
		<Frame ratio={[1, 1]}>
			<LogoImg
				src="https://source.unsplash.com/random/900×700/?computer"
				alt=""
			/>
		</Frame>
		<span>React.js / UI library for the Modern Web </span>
	</Wrapper>
);
