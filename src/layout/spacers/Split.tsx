import styled from "styled-components";
import { fractions, spacingMap } from "../constants";

type SplitProps = {
	gutter?: keyof typeof spacingMap;
	fraction?: keyof typeof fractions;
};

const Split = styled.div<SplitProps>`
	display: grid;
	gap: ${({ gutter = "lg" }) => spacingMap[gutter] ?? spacingMap[gutter]};
	grid-template-columns: ${({ fraction = "1/2" }) =>
		fractions[fraction] ?? fractions[fraction]};
`;

export default Split;
