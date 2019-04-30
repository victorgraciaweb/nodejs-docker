'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Carga de rutas
var fruta_routes = require('./routes/fruta');

//body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configuracion de CORS

//Rutas base
app.use('/api', fruta_routes);

module.exports = app;
