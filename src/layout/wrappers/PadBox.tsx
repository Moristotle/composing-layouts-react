import styled from "styled-components";
import { spacingMap } from "../constants";

interface PadBoxProps {
	padding: (keyof typeof spacingMap)[] | keyof typeof spacingMap;
}

const PadBox = styled.div<PadBoxProps>`
	padding: ${({ padding }) => {
		return ([] as (keyof typeof spacingMap)[])
			.concat(padding)
			.map((p) => spacingMap[p])
			.join(" ");
	}};
`;

export default PadBox;
