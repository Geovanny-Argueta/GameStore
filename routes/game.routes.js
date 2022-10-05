const express = require("express");

const {
  createGame,
  getAllGames,
  updateGame,
  deleteGame,
  createReviews,
} = require("../controllers/games.control");

//Middlewares
const { protectSession } = require("../middlewares/auth.middlewares");
const { gamesExists } = require("../middlewares/game.middleware");

const gamesRouter = express.Router();
gamesRouter.get("/", getAllGames);

gamesRouter.use(protectSession);
gamesRouter.post("/", createGame);
gamesRouter.patch("/:id", gamesExists, updateGame);
gamesRouter.delete("/:id", gamesExists, deleteGame);
gamesRouter.post("/reviews/:gameId", createReviews);

module.exports = { gamesRouter };
