import React, { useState, useEffect } from "react";
import { addFile } from "../../../../utils/api";
const AddFile = ({ directory, rerender, setRerender }) => {
	const [formData, setFormData] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const abortController = new AbortController();
		addFile(`${directory}/${formData}`, abortController.signal);
		setRerender(!rerender);
	};

	useEffect(() => {
		setFormData("");
	}, [rerender]);

	const handleChange = ({ target }) => {
		setFormData(target.value);
	};

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<label htmlFor="add_file">
				<input
					id="add_file"
					type="text"
					name="add_file"
					onChange={handleChange}
					value={formData}
				/>
			</label>
			<button type="submit">Add</button>
		</form>
	);
};

export default AddFile;
