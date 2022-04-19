import styled from "styled-components";
import { spacingMap } from "../constants";

type ColumnsProps = {
	gutter?: keyof typeof spacingMap;
	columns: number;
};

type ColumnProps = {
	$span?: number;
};

export const Columns = styled.div<ColumnsProps>`
	--columns: ${({ columns = 1 }) => columns};
	display: grid;
	gap: ${({ gutter = "lg" }) => spacingMap[gutter] ?? spacingMap[gutter]};
	grid-template-columns: repeat(var(--columns), 1fr);
`;

export const Column = styled.div<ColumnProps>`
	grid-column: span min(${({ $span = 1 }) => $span}, var(--columns)) / auto;
`;
