//Init
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

//Models
const { Console } = require("../models/console.model");
const { Game } = require("../models/game.model");

const createConsole = catchAsync(async (req, res, next) => {
  const { name, company } = req.body;
  const newConsole = await Console.create(name, company);
  res.status(200).json({
    status: "Success",
    data: {
      newConsole,
    },
  });
});

const getAllConsoles = catchAsync(async (req, res, next) => {
  const console = await Console.findAll({
    where: { status: "active" },
    include: { model: Game },
  });
  res.status(200).json({
    status: "Success",
    data: {
      console,
    },
  });
});

const updateConsoles = catchAsync(async (req, res, next) => {
  const { console } = req;
  const { name } = req.body;

  await console.update({ name });

  res.status(200).json({
    status: "Success",
    data: {
      console,
    },
  });
});

const deleteConsoles = catchAsync(async (req, res, next) => {
  const { console } = req;

  await console.update({ status: "deleted" });

  res.status(200).json({
    status: "success",
  });
});

module.exports = {
  createConsole,
  getAllConsoles,
  updateConsoles,
  deleteConsoles,
};
