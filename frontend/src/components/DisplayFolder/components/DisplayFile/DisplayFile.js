import React, { useState } from "react";
import TransferFile from "./components/TransferFile/TransferFile";

const DisplayFile = ({ file, currentPath, rerender, setRerender }) => {
	const [transferingFile, setTransferingFile] = useState(false);
	return (
		<div key={currentPath}>
			{file}{" "}
			<button onClick={() => setTransferingFile(!transferingFile)}>
				Transfer
			</button>
			{transferingFile && (
				<TransferFile
					currentPath={currentPath}
					rerender={rerender}
					setRerender={setRerender}
				/>
			)}
		</div>
	);
};

export default DisplayFile;
