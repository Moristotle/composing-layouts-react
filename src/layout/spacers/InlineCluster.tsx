import styled from "styled-components";
import { justifyAlignMap, spacingMap } from "../constants";

type InlineClusterProps = {
	gutter?: keyof typeof spacingMap;
	justify?: keyof typeof justifyAlignMap;
	align?: keyof typeof justifyAlignMap;
};

const InlineCluster = styled.div<InlineClusterProps>`
	--gutter: ${({ gutter = "lg" }) => spacingMap[gutter] ?? spacingMap[gutter]};
	display: flex;
	flex-wrap: wrap;
	gap: var(--gutter);

	justify-content: ${({ justify = "start" }) =>
		justifyAlignMap[justify] ?? justifyAlignMap[justify]};

	align-items: ${({ align = "start" }) =>
		justifyAlignMap[align] ?? justifyAlignMap[align]};
`;

export default InlineCluster;
