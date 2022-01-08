const fs = require("fs");

// const directoryPath = `../filesToView`;

//{"data": "../filesToView"} how it needs to come from front end on req.body
const response = {};
function listFiles(directoryPath) {
	const fileNames = fs.readdirSync(directoryPath);
	fileNames.forEach((file) => {
		if (fs.lstatSync(`${directoryPath}/${file}`).isDirectory()) {
			//declare an empty array if it doesn't exist
			if (!`${directoryPath}/${file}`) {
				response[`${directoryPath}/${file}`] = [];
			}
			listFiles(`${directoryPath}/${file}`);
		} else {
			//declare an empty array if it doesn't exist
			if (!response[directoryPath]) {
				response[directoryPath] = [];
			}
			response[directoryPath].push(file);
		}
	});

	return response;
}

module.exports = { listFiles };
