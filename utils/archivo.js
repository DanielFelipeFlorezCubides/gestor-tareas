import fs from 'fs';
import path from 'path';

const filePath = path.resolve('data', 'tareas.json');

export const guardarDB = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export const leerDB = () => {
  if (!fs.existsSync(filePath)) return [];
  const info = fs.readFileSync(filePath, { encoding: 'utf-8' });
  return JSON.parse(info);
};