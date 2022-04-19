import {
	Card,
	Top,
	Bottom,
	Button,
	Description,
	Price,
	PlanName,
} from "./parts";
import { PadBox, Stack, Grid, InlineCluster } from "../../layout";

function PricingPlan() {
	return (
		<Card>
			<PadBox padding="lg">
				<Top>
					<PlanName>Basic</PlanName>
					<Description>All the Basics for getting started</Description>
					<Price>$12/mo</Price>
					<InlineCluster gutter="none" justify="center">
						<Button>
							<PadBox padding={["sm", "xl"]}>Buy Basic</PadBox>
						</Button>
					</InlineCluster>
				</Top>
			</PadBox>

			<Bottom>
				<PadBox padding="lg">
					<Stack gutter="md">
						<span>What's included</span>
						<ul>
							<li>Lorem ipsum dolor sit amet</li>
							<li>Mollis pretium lorem primis senectus habitasse</li>
							<li>Phasellus ante pellentesque erat</li>
						</ul>
					</Stack>
				</PadBox>
			</Bottom>
		</Card>
	);
}

export default function PlanList() {
	return (
		<Grid gutter="xl" minItemWidth="16rem">
			<PricingPlan />
			<PricingPlan />
			<PricingPlan />
			<PricingPlan />
		</Grid>
	);
}
