require("dotenv").config();

const Express = require("express");
const app = Express();

const dbConnection = require('./db');
const controllers = require('./controllers');

app.use(require('./middleware/headers'));

app.use((req, res, next) => {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    next();
});

app.use(Express.json());

app.use('/commentReview', controllers.commentReview);
app.use('/allMovies', controllers.getMovies);
app.use('/movieList', controllers.movieList);
app.use('/publicview', controllers.publicview);
app.use('/userlogin', controllers.userLogin);

dbConnection.authenticate()
    .then(()=> dbConnection.sync())
    .then(()=>{
        app.listen(process.env.PORT, ()=> {
            console.log(`[Server]: App is running on ${process.env.PORT}.`);
        });        
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`);
    });