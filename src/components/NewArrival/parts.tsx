import { Center, PadBox } from "../../layout";

export const Details: React.FC = ({ children }) => (
	<PadBox padding="lg">
		<Center centerText>{children}</Center>
	</PadBox>
);
