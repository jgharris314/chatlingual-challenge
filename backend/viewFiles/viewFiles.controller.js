const service = require("./viewFiles.service");

async function listFiles(req, res, next) {
	const files = await service.listFiles(req.body.data);
	res.json({ data: files });
}

module.exports = { listFiles };
