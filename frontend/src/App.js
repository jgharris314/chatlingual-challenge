import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchFiles } from "./utils/api";
function App() {
	const [fileState, setFileState] = useState({});
	const directoryPath = `../filesToView`;

	async function loadFiles() {
		const abortController = new AbortController();
		const files = await fetchFiles(directoryPath, abortController.signal);

		setFileState(files);
	}

	useEffect(() => {
		loadFiles();
	}, []);
	return (
		<div className="App">
			{fileState &&
				Object.keys(fileState).map((folder, index) => (
					<div key={index}>{folder}</div>
				))}
		</div>
	);
}

export default App;
