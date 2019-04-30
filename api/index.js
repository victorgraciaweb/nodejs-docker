'use strcit'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/curso', { useNewUrlParser: true })
		.then(() => {
			console.log('La conexión a la base de datos se ha realizado correctamente.');

			app.listen(port, () =>{
				console.log('El servidor está corriendo correctamente en localhost:3800');
			});
		})
		.catch(err => console.log(err));
