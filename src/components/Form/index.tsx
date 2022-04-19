import { ReactNode } from "react";
import { Column, Columns, Stack } from "../../layout";

export default function Form() {
	return (
		<Columns gutter="lg" columns={6}>
			<Column $span={3}>
				<FormGroup htmlFor="firstName" label="First Name">
					<input type="text" id="firstName" />
				</FormGroup>
			</Column>

			<Column $span={3}>
				<FormGroup htmlFor="lastName" label="Last Name">
					<input type="text" id="lastName" />
				</FormGroup>
			</Column>

			<Column $span={4}>
				<FormGroup htmlFor="email" label="Email">
					<input type="text" id="email" />
				</FormGroup>
			</Column>
			<Column $span={6}>
				<FormGroup htmlFor="address" label="Street Address">
					<input type="text" id="address" />
				</FormGroup>
			</Column>
			<Column $span={2}>
				<FormGroup htmlFor="city" label="City">
					<input type="text" id="city" />
				</FormGroup>
			</Column>
			<Column $span={2}>
				<FormGroup htmlFor="state" label="State">
					<input type="text" id="state" />
				</FormGroup>
			</Column>
			<Column $span={2}>
				<FormGroup htmlFor="zipCode" label="Zip Code">
					<input type="text" id="zipCode" />
				</FormGroup>
			</Column>
		</Columns>
	);
}

interface FormGroupProps {
	htmlFor: string;
	label: string;
	children: ReactNode;
}

function FormGroup({ htmlFor, label, children }: FormGroupProps) {
	return (
		<Stack gutter="md">
			<label htmlFor={htmlFor}>{label}</label>
			{children}
		</Stack>
	);
}
