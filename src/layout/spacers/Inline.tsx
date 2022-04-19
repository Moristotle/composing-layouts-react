import styled, { css } from "styled-components";
import { CSSLength, stretchMap } from "../constants";
import InlineCluster from "./InlineCluster";

type InlineProps = {
	stretch?: number | keyof typeof stretchMap;
	switchAt?: number | CSSLength;
};

const responsive = css<Pick<InlineProps, "switchAt">>`
	--switchAt: ${({ switchAt }) =>
		typeof switchAt === "string" ? switchAt : `${switchAt}px`};

	flex-wrap: wrap;

	& > * {
		min-width: fit-content;
		flex-basis: calc((var(--switchAt) - (100% - var(--gutter))) * 999);
	}
`;

const Inline = styled(InlineCluster)<InlineProps>`
	flex-wrap: nowrap;

	${({ stretch }) => {
		if (typeof stretch === "number") {
			return `> :nth-child(${stretch + 1}) { flex: 1 }`;
		}

		if (stretch === undefined) {
			return;
		}

		return stretchMap[stretch];
	}}

	// responsiveness becomes opt-in by providing a value to switchAt prop.
	${({ switchAt }) => switchAt && responsive}
`;

export default Inline;
