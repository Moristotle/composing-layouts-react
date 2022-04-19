//
import styled from "styled-components";
import { spacingMap } from "../constants";

type GridProps = {
	gutter?: keyof typeof spacingMap;
	minItemWidth: string;
};

const Grid = styled.div<GridProps>`
	display: grid;
	gap: ${({ gutter = "lg" }) => spacingMap[gutter] ?? spacingMap[gutter]};
	grid-template-columns: repeat(
		auto-fit,
		minmax(min(${({ minItemWidth }) => minItemWidth}, 100%), 1fr)
	);
`;

export default Grid;
