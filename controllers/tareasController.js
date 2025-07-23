import Tarea from '../models/tarea.js';
import { guardarDB, leerDB } from '../utils/archivo.js';
import _ from 'lodash';

let tareas = leerDB();

export const crearTarea = (desc) => {
  if (_.isEmpty(desc.trim())) return;
  tareas.push(new Tarea(desc));
  tareas = _.uniqBy(tareas, 'desc'); // Elimina duplicados por descripción
  guardarDB(tareas);
};

export const listarTareas = (completadas = null) => {
  let tareasFiltradas = tareas;

  if (completadas === true) {
    tareasFiltradas = tareas.filter(t => t.completadoEn);
  } else if (completadas === false) {
    tareasFiltradas = tareas.filter(t => !t.completadoEn);
  }

  return _.orderBy(tareasFiltradas, ['completadoEn'], ['asc']);
};

export const completarTareas = (ids) => {
  tareas = tareas.map(t => ({
    ...t,
    completadoEn: ids.includes(t.id) ? new Date().toISOString() : t.completadoEn
  }));
  guardarDB(tareas);
};

export const eliminarTarea = (id) => {
  tareas = tareas.filter(t => t.id !== id);
  guardarDB(tareas);
};