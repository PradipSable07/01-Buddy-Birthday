import { useState } from "react";
import profiles from "./data";
import List from "./List";
import Button from "./Button";
function App() {
	const [people, setPeople] = useState(profiles);

	return (
		<main>
			<section className='container'>
				<h3>{people.length} Birthdays Today</h3>
				<List people={people} />
				<Button setHandle={() => setPeople([])} btnText='Clear All' />
			</section>
		</main>
	);
}

export default App;
