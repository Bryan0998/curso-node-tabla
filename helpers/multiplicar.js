
const fs = require('fs');
const colors = require('colors');
colors.enable();

const crearArchivo = async( base = 5, listar, hasta ) => {
    

    try{
        
        

        let salida = '', consola = '';

        for(let i = 1; i <= hasta; i++){

            salida += `${ base } ${ 'x' } ${ i } = ${ base * i }\n`;
            consola += `${ colors.bgMagenta.yellow(base) } ${ 'x'.red } ${ i } = ${ base * i }\n`;
        }

        if(listar){
            console.log('========================='.inverse);
            console.log('     Tabla del '.america, colors.bgGreen(base));
            console.log('========================='.inverse);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/ tabla-${ base }.txt`, salida);

        return(`tabla-${ base }.txt creado`);

    }
    catch (err){
        throw err;
    }

}




/*
const crearArchivo = ( base = 5 ) => {

    return new Promise( ( resolve, reject ) => {

    console.log('=========================');
    console.log('     Tabla del ', base);
    console.log('=========================');

    let salida = '';

    for(let i = 1; i <= 10; i++){

        salida += `${ base } x ${ i } = ${ base * i }\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${ base }.txt`, salida);

    resolve(`tabla-${ base }.txt creado`);

    });

}
*/


module.exports = {
    crearArchivo
}