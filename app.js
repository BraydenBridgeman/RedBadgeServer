require("dotenv").config();

const Express = require("express");
const app = Express();

const dbConnection = require('./db');
const controllers = require('./controllers');

app.use(require('./middleware/headers'));

app.use(Express.json());

app.use('/publicview', controllers.publicview);
app.use('/movies', controllers.addMovie);
app.use('/createlogin', controllers.createLogin);
app.use('/login', controllers.userLogin);
app.use('/commentReview', controllers.addCommentReview);
app.use('/updateCommentReview', controllers.updateCommentReview);
app.use('/deleteCommentReview', controllers.deleteCommentReview);
app.use('/userList', controllers.addList);
app.use('/updateUserList', controllers.updateListName);
app.use('/deleteUserList', controllers.deleteList);

dbConnection.authenticate()
    .then(()=> dbConnection.sync())
    .then(()=>{
        app.listen(process.env.PORT, ()=> {
            console.log(`[Server]: App is listening on ${process.env.PORT}.`);
        });        
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`);
    });