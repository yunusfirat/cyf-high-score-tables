import React from "react";
import "./App.css";
import HighScoreTable from "./HighScoreTable";
import WorldWideTable from "./WorldWideTable";
function App() {
	return (
		<div className="App">
			<WorldWideTable />
			<h1>High Scores Per Country</h1>
			<HighScoreTable />
		</div>
	);
}

export default App;
