import {
  crearTarea,
  listarTareas,
  completarTareas,
  eliminarTarea,
} from './controllers/tareasController.js';
import { inquirerMenu, pausa, leerInput, listadoChecklist, confirmar } from './helpers/menu.js';

const main = async () => {
  let opt = '';
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const desc = await leerInput('Descripción:');
        crearTarea(desc);
        break;

      case '2':
        console.table(listarTareas());
        break;

      case '3':
        console.table(listarTareas(true));
        break;

      case '4':
        console.table(listarTareas(false));
        break;

      case '5':
        const ids = await listadoChecklist(listarTareas());
        completarTareas(ids);
        break;

      case '6':
        const tareas = listarTareas();
        const id = await listadoChecklist(tareas);
        if (await confirmar('¿Estás seguro?')) {
          eliminarTarea(id[0]);
        }
        break;
    }

    if (opt !== '0') await pausa();
  } while (opt !== '0');
};

main();