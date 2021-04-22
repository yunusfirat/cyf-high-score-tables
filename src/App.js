import React from "react";
import "./App.css";
import HighScoreTable from "./HighScoreTable";
// import PlayerScore from "./PlayerScore";
function App() {
	return (
		<div className="App">
			<div>
				<h1>High Scores Per Country</h1>
			</div>
			<HighScoreTable />
			{/* <PlayerScore /> */}
		</div>
	);
}

export default App;
