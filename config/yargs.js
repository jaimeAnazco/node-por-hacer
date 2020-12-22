const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripción de la tarea por hacer'

};

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'

};


const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;
module.exports = {

    argv
}