import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchFiles } from "./utils/api";
import DisplayFolder from "./components/DisplayFolder/DisplayFolder";
import Search from "./components/Search/Search";
function App() {
	const [rerender, setRerender] = useState(false);
	const [fileState, setFileState] = useState({});
	const directoryPath = `../filesToView`;
	const [formData, setFormData] = useState(directoryPath);
	const loadFiles = async () => {
		const abortController = new AbortController();
		const files = await fetchFiles(formData, abortController.signal);

		setFileState(files);
	};

	useEffect(() => {
		loadFiles();
	}, [rerender]);

	return (
		<div className="App">
			{fileState && (
				<div>
					<h1>Click on a folder name to view files</h1>
					{Object.keys(fileState).map((folder, index) => {
						return (
							<DisplayFolder
								folder={fileState[folder]}
								directory={folder}
								key={index}
								rerender={rerender}
								setRerender={setRerender}
							/>
						);
					})}
				</div>
			)}
			<Search
				formData={formData}
				setFormData={setFormData}
				loadFiles={loadFiles}
			/>
		</div>
	);
}

export default App;
