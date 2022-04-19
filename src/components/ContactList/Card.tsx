import styled from "styled-components";
import { Frame, InlineCluster, PadBox, Split, Stack } from "../../layout";

const Avatar = styled(Frame).attrs(() => ({ ratio: [1, 1] }))`
	border-radius: 50%;
	background-color: black;
`;

const RadiusWrapper = styled.div`
	border: 1px solid black;
	border-radius: 0.5rem;
	min-width: min-content;
`;

const Box = styled(Split).attrs(() => ({ gutter: "none" }))`
	> * {
		border-block-start: 1px solid black;
	}

	> * + * {
		border-inline-start: 1px solid black;
	}
`;

const PillSpan = styled(PadBox).attrs(() => ({
	as: "span",
	padding: ["xs", "md"],
}))`
	border-radius: 1rem;
	color: white;
	background: black;
	font-size: 0.7rem;
`;

const CardDetails = styled(PadBox).attrs(() => ({
	as: Split,
	gutter: "lg",
	padding: "xl",
	fraction: "auto-end",
}))`
	> figure > ${Avatar} {
		inline-size: 3rem;
		min-inline-size: 100%;
	}
`;

const Icon = styled.div`
	background: black;
	inline-size: 1rem;
	block-size: 1rem;
`;

function Card() {
	return (
		<RadiusWrapper>
			<CardDetails>
				<Stack gutter="xs">
					<InlineCluster gutter="lg" align="start">
						<strong>Jane Doe</strong>
						<PillSpan>Admin</PillSpan>
					</InlineCluster>
					<span>Lorem ipsum dolor sit amet</span>
				</Stack>
				<figure>
					<Avatar />
				</figure>
			</CardDetails>
			<Box gutter="none">
				<PadBox padding="lg">
					<InlineCluster gutter="lg" justify="center" align="center">
						<Icon />
						<span>EMAIL</span>
					</InlineCluster>
				</PadBox>
				<PadBox padding="lg">
					<InlineCluster gutter="lg" justify="center" align="center">
						<Icon />
						<span>CALL</span>
					</InlineCluster>
				</PadBox>
			</Box>
		</RadiusWrapper>
	);
}

export default Card;
