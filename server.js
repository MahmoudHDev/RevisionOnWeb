import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, "public")));

// Home
app.get('/', (req, res) => {
    res.render(__dirname + '/views/home.ejs')

});

app.post('/', (req, res) => {
    console.log(req.body);
    const body = req.body;
    if (allfilled(body.usernameText, body.emailText, body.passwordText) === true) {
        console.log('procced');
        res.render('success-reg.ejs');
    } else {
        console.log('dont procced');
        
        res.redirect('/');
    }
});


var allfilled = function (user, email, pass) {
    console.log(user, email, pass);
    if (user.length === 0) {
        console.log("String is empty");
        return false;
    } else {
        console.log("proceed to next step");
        return true;
    }
};

// About
app.get('/about', (req, res) => {
    res.render("about")

});

app.get('/projects', (req, res) => {
    res.render("projects")

});
app.listen(port, () => {
    console.log("server started listening.")
})