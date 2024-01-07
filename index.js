const readline = require('readline-sync');

const listaTareas = [];

function agregarTarea(indicador, descripcion, completada = false) {
  listaTareas.push({ indicador, descripcion, completada });
  console.log(`Tarea "${descripcion}" añadida.`);
}

function eliminarTarea(indice) {
  if (indice >= 0 && indice < listaTareas.length) {
    const tareaEliminada = listaTareas.splice(indice, 1);
    console.log(`Tarea "${tareaEliminada[0].descripcion}" eliminada.`);
  } else {
    console.log('Indice invalido. No se pudo eliminar la tarea.');
  }
}

function completarTarea(indice) {
  if (indice >= 0 && indice < listaTareas.length) {
    listaTareas[indice].completada = true;
    console.log(`Tarea "${listaTareas[indice].descripcion}" marcada como completada.`);
  } else {
    console.log('Indice invalido. No se pudo completar la tarea.');
  }
}

function gestionarTareas() {
  let opcion = '';

  while (opcion !== 'exit') {
    console.log('\nOpciones:');
    console.log('1. Añadir tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Completar tarea');
    console.log('exit para salir');

    opcion = readline.question('Elija una opcion: ');

    switch (opcion) {
      case '1':
        const indicador = listaTareas.length + 1;
        const descripcion = readline.question('Ingrese la descripcion de la tarea: ');
        agregarTarea(indicador, descripcion);
        break;
      case '2':
        const indiceEliminar = parseInt(readline.question('Ingrese el indice de la tarea a eliminar: '));
        eliminarTarea(indiceEliminar - 1);
        break;
      case '3':
        const indiceCompletar = parseInt(readline.question('Ingrese el indice de la tarea a completar: '));
        completarTarea(indiceCompletar - 1);
        break;
      case 'exit':
        console.log('Saliendo del programa');
        break;
      default:
        console.log('Opcion invalida. Intentelo de nuevo.');
    }
  }
}

gestionarTareas();