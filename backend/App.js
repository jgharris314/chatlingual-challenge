const express = require("express");
const cors = require("cors");
const app = express();
const viewFilesRouter = require("./viewFiles/viewFiles.router");

app.use(cors());
app.use(express.json());
app.use("/viewFiles", viewFilesRouter);

module.exports = app;
