require("dotenv").config();

const express = require("express");
const app = express();
const cors = require('cors');
const dbConnection = require("./db");
const controllers = require("./controllers");
// const middleware = require('./middleware');

app.use(express.json());
app.use(require('./middleware/headers'));
app.use(cors());
app.use("/commentReview", controllers.commentReview);
app.use("/allMovies", controllers.getMovies);
app.use("/movieList", controllers.movieList);
app.use("/publicview", controllers.publicview);
app.use("/userlogin", controllers.userLogin);
// app.use(middleware.validateSession);

dbConnection
  .authenticate()
  .then(() => dbConnection.sync())
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`[Server]: App is running on ${process.env.PORT}.`);
    });
  })
  .catch((err) => {
    console.log(`[Server]: Server crashed. Error = ${err}`);
  });