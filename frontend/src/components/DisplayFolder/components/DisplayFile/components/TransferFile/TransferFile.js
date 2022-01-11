import React, { useState } from "react";
import { tranferFile } from "../../../../../../utils/api";
const TransferFile = ({ currentPath, rerender, setRerender }) => {
	const [formData, setFormData] = useState({
		currentPath: currentPath,
		targetPath: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		const abortController = new AbortController();
		tranferFile(formData, abortController.signal);
		setRerender(!rerender);
	};

	const handleChange = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value });
	};
	return (
		<form className="transfer-form" onSubmit={handleSubmit}>
			<label htmlFor="targetPath">
				<input
					id="targetPath"
					type="text"
					name="targetPath"
					onChange={handleChange}
					value={formData.targetPath}
				/>
			</label>
			<button type="submit">Transfer</button>
		</form>
	);
};

export default TransferFile;
