import { Split } from "../../layout";
import Form from ".";

export default function FormSideBar() {
	return (
		<Split gutter="xxl" fraction="1/3">
			<div>
				<h2>Personal Information</h2>
				<span>The information you provide will be displayed publicly.</span>
			</div>
			<Form />
		</Split>
	);
}
