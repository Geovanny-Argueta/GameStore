const { application } = require("express");
const express = require("express");

const {
  createConsole,
  getAllConsoles,
  updateConsoles,
  deleteConsoles,
} = require("../controllers/console.control");

const { protectSession } = require("../middlewares/auth.middlewares");
const { consoleExist } = require("../middlewares/console.middleware");

const consoleRouter = express.Router();
consoleRouter.get("/", getAllConsoles);
consoleRouter.use(protectSession);
consoleRouter.post("/", createConsole);
consoleRouter.patch("/:id", consoleExist, updateConsoles);
consoleRouter.delete("/:id", consoleExist, deleteConsoles);

module.exports = { consoleRouter };
