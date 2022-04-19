import styled from "styled-components";
import { CSSLength, spacingMap } from "../constants";

type CoverProps = {
	children: React.ReactNode;
	top?: React.ReactNode;
	bottom?: React.ReactNode;
	gutter?: keyof typeof spacingMap;
	minHeight?: CSSLength;
};
const Cover = styled.div.attrs<CoverProps>(({ children, top, bottom }) => {
	return {
		children: (
			<>
				{top && <div>{top}</div>}
				<div data-cover-child>{children}</div>
				{bottom && <div>{bottom}</div>}
			</>
		),
	};
})<CoverProps>`
	display: grid;
	gap: ${({ gutter = "lg" }) => spacingMap[gutter] ?? spacingMap.lg};
	min-block-size: ${({ minHeight }) => minHeight ?? "100vh"};

	grid-template-rows: ${({ top, bottom }) =>
		top && bottom
			? "auto 1fr auto"
			: top
			? "auto 1fr"
			: bottom
			? "1fr auto"
			: "1fr"};

	> [data-cover-child] {
		align-self: center;
	}
`;

export default Cover;
