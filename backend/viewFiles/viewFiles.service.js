const fs = require("fs");

// const directoryPath = `../filesToView`;

//{"data": "../filesToView"} how it needs to come from front end on req.body

//I wrapped the list files function in the generate function to be able to clear the response object on page refresh etc.
function generate(parDirectoryPath) {
	const response = {};

	function listFiles(directoryPath) {
		const fileNames = fs.readdirSync(directoryPath);
		fileNames.forEach((file) => {
			if (fs.lstatSync(`${directoryPath}/${file}`).isDirectory()) {
				if (!`${directoryPath}/${file}`) {
					response[`${directoryPath}/${file}`] = [];
				}

				listFiles(`${directoryPath}/${file}`);
			} else {
				if (!response[directoryPath]) {
					response[directoryPath] = [];
				}
				response[directoryPath].push(file);
			}
		});

		return response;
	}
	return listFiles(parDirectoryPath);
}

function addFile(filePath) {
	try {
		fs.writeFileSync(filePath, "");
	} catch (error) {
		console.log("Cannot add file", error);
	}
}

function transferFile(currentPath, targetPath) {
	try {
		fs.renameSync(currentPath, targetPath);
	} catch (error) {
		console.log(error);
	}
}

module.exports = { generate, addFile, transferFile };
