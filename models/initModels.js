// Models
const { User } = require("./user.model");
const { Review } = require("./review.model");
const { Game } = require("./game.model");
const { Console } = require("./console.model");

const initModels = () => {
  //1user to many reviews
  User.hasMany(Review, { foreignKey: "userId" });
  Review.belongsTo(User);

  //1 Game has many reviews
  Game.hasMany(Review, { foreignKey: "gameId" });
  Review.belongsTo(Game);

  //games has many Console and Console has many Games
  Game.belongsToMany(Console, {
    through: "gameInConsole",
    foreignKey: "gameId",
  });
  Console.belongsToMany(Game, {
    through: "gameInConsole",
    foreignKey: "consoleId",
  });
};

module.exports = { initModels };
