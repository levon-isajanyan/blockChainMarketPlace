//ExpressJs required modules
const express = require('express');
//ExpressJs required modules
const app = express();
//Body-parser module
const bodyParser = require('body-parser')
//Pug module
const pug = require('pug');
//Sass module
const sassMiddleware = require('node-sass-middleware');
//Path module
const path = require('path');
//Vue js module
const Vue = require('vue');
//Axios module
const axios = require('axios');




//Setup engine pug
app.set('view engine', 'pug');

//Middleware for sass module
app.use(sassMiddleware({
    src: path.join(__dirname, 'node_modules/foundation-sites/scss'),
    dest: path.join(__dirname, 'public/CSS'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/CSS'
}));



//Middleware for serve js,images,css from public folder
app.use(express.static( path.join( __dirname, 'public') ) );
//Middleware to hide node_modules private folder via module route
app.use('/module', express.static(__dirname + '/node_modules'));

//During request result render pug and return to user
app.get('/', (req, res) =>
    res.render('index'));


//Port listener
app.listen(3000, () => console.log('Example app listening on port 3000!'));