import { ReactNode } from "react";
import styled from "styled-components";
import { CSSLength } from "../constants";

interface CenterProps {
	maxWidth?: CSSLength;
	centerChildren?: boolean;
	centerText?: boolean;
	as?: ReactNode;
}

const Center = styled.div<CenterProps>`
	box-sizing: content-box;
	margin-inline-start: auto;
	margin-inline-end: auto;

	max-inline-size: ${({ maxWidth = "100%" }) => maxWidth};
	${({ centerChildren }) =>
		centerChildren &&
		"display: flex; flex-direction: column; align-items: center;"};
	${({ centerText }) => centerText && "text-align: center;"}
`;

export default Center;
