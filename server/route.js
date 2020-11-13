const Authentification = require("./controllers/authentification");
require("./services/passport")
// const passport = require("passport");

module.exports = (app) => {
  app.post("/api/signup", Authentification.signup);
  app.post("/api/signin", Authentification.signin);
};
