console.clear();

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
colors.enable();

//console.log(argv);


crearArchivo(argv.b,argv.l,argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.bgWhite.blue))
    .catch( err => console.log('Algo salió mal!!\n', err));





/*
const [ , , arg3 = 'base=5' ] = process.argv;
const [, base = 5] = arg3.split('=');
*/
//console.log(arg3);



