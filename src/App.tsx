import { FC, ReactElement } from "react";
import { Navbar } from "./components/Navbar";
import { Router } from "./router";

const App: FC = (): ReactElement => {
	return (
		<>
			<Navbar/>
			<Router/>
		</>
	);
};

export default App;
