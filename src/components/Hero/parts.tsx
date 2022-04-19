import styled from "styled-components";
import { PadBox } from "../../layout";

type ButtonProps = {
	primary?: boolean;
};

export const Button = styled(PadBox).attrs(() => ({
	padding: ["md", "xl"],
	as: "button",
}))<ButtonProps>`
	background: ${({ primary }) => (primary ? "black" : "white")};
	color: ${({ primary }) => (primary ? "white" : "black")};
	border: ${({ primary }) => (primary ? "none" : "1px solid black")};
	border-radius: 0.25rem;
`;
