import express from 'express';
import bodyParser from 'body-parser';
import path from'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { dir } from 'console';



const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, "public")));


app.get('/', (req,res) => {
    res.render( __dirname + '/views/home.ejs')
    
});

app.post('/', (req,res) => {

});

app.listen(port, () => { 
    console.log("server started listening.")
})