import inquirer from 'inquirer';

export const inquirerMenu = async () => {
  const choices = [
    { value: '1', name: '1. Crear tarea' },
    { value: '2', name: '2. Listar todas' },
    { value: '3', name: '3. Listar completadas' },
    { value: '4', name: '4. Listar pendientes' },
    { value: '5', name: '5. Completar tareas' },
    { value: '6', name: '6. Eliminar tarea' },
    { value: '0', name: '0. Salir' },
  ];
  const { opcion } = await inquirer.prompt([{ type: 'list', name: 'opcion', message: '¿Qué desea hacer?', choices }]);
  return opcion;
};

export const pausa = async () => {
  await inquirer.prompt([{ type: 'input', name: 'enter', message: `Presione ENTER para continuar` }]);
};

export const leerInput = async (mensaje) => {
  const { desc } = await inquirer.prompt([
    {
      type: 'input',
      name: 'desc',
      message: mensaje,
      validate(value) {
        if (value.length === 0) return '¡Por favor ingrese un valor!';
        return true;
      },
    },
  ]);
  return desc;
};

export const listadoChecklist = async (tareas) => {
  const choices = tareas.map(t => ({
    value: t.id,
    name: t.desc,
    checked: !!t.completadoEn,
  }));

  const { ids } = await inquirer.prompt([{ type: 'checkbox', name: 'ids', message: 'Selecciona', choices }]);
  return ids;
};

export const confirmar = async (mensaje) => {
  const { ok } = await inquirer.prompt([{ type: 'confirm', name: 'ok', message: mensaje }]);
  return ok;
};