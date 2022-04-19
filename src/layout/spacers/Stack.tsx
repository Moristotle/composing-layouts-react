import styled from "styled-components";
import { spacingMap } from "../constants";

type StackProps = {
	gutter?: keyof typeof spacingMap;
};
const Stack = styled.div<StackProps>`
	display: grid;
	gap: ${({ gutter = "lg" }) => spacingMap[gutter] ?? spacingMap[gutter]};
`;

export default Stack;
