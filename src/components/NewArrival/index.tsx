import { Frame } from "../../layout";
import { Details } from "./parts";

function NewArrivals() {
	return (
		<div>
			<Frame ratio={[1, 1]}>
				<img src={`https://source.unsplash.com/random/900×700/?shirt`} alt="" />
			</Frame>

			<Details>Shirt on sale - $35.99</Details>
		</div>
	);
}

export default NewArrivals;
