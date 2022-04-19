import { Center, PadBox } from "@bedrock-layout/primitives";
import Hero from "./components/Hero";

// TODO: create grid layout with buttons to render the different components.
function App() {
	return (
		<PadBox
			as={Center}
			padding="lg"
			maxWidth="85rem"
			style={{ fontFamily: "sans-serif" }}
		>
			<Hero />
		</PadBox>
	);
}

export default App;
