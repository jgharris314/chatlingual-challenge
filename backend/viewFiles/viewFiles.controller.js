const service = require("./viewFiles.service");

async function listFiles(req, res, next) {
	const files = await service.generate(req.body.data);
	res.json({ data: files });
}

async function addFile(req, res, next) {
	const response = await service.addFile(req.body.data);
	res.status(201).json({ data: response });
}

async function transferFile(req, res, next) {
	const response = await service.transferFile(
		req.body.data.currentPath,
		req.body.data.targetPath
	);
	res.status(201).json({ data: response });
}

module.exports = { listFiles, addFile, transferFile };
