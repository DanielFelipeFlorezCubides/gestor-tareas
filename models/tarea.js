export default class Tarea {
    constructor(desc) {
      this.desc = desc;
      this.completadoEn = null;
      this.id = `${new Date().getTime()}`;
    }
  }