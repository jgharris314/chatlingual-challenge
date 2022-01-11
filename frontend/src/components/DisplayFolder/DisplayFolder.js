import React, { useState, useEffect } from "react";
import "./display-folder.css";
import AddFile from "./components/AddFile/AddFile";
import DisplayFile from "./components/DisplayFile/DisplayFile";
const DisplayFolder = ({ folder, directory, rerender, setRerender }) => {
	const [displayFiles, setDisplayFiles] = useState(false);
	const [addingFile, setAddingFile] = useState(false);

	return (
		<div className="folder" key={folder}>
			<h2 onClick={() => setDisplayFiles(!displayFiles)}>{directory}</h2>
			{displayFiles && (
				<div className="files">
					{folder.map((file, index) => {
						return (
							<DisplayFile
								file={file}
								currentPath={`${directory}/${file}`}
								key={file + index}
								rerender={rerender}
								setRerender={setRerender}
							/>
						);
					})}
				</div>
			)}
			<button
				className="add-btn"
				onClick={() => setAddingFile(!addingFile)}
			>
				{addingFile ? "x" : "Add File"}
			</button>
			{addingFile && (
				<AddFile
					directory={directory}
					rerender={rerender}
					setRerender={setRerender}
				/>
			)}
		</div>
	);
};

export default DisplayFolder;
