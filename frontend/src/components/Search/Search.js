import React from "react";

const Search = ({ formData, loadFiles, setFormData }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		loadFiles();
	};

	const handleChange = ({ target }) => {
		setFormData(target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="search_directory">
				<input
					id="search_directory"
					type="text"
					name="search_directory"
					onChange={handleChange}
					value={formData}
				/>
			</label>
			<button type="submit">Find</button>
		</form>
	);
};

export default Search;
