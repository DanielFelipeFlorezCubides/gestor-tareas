# 📝 Gestor de Tareas por Consola

Sistema de gestión de tareas desde la terminal (CLI) construido con **Node.js**, utilizando `inquirer` para la interfaz interactiva, `lodash` para manejo de datos, y persistencia en archivos `.json`.

> ¡Refactorizado para cumplir con las exigencias del legendario Don Brian! 💼🔥

---

## 🚀 Características

- ✅ Crear tareas nuevas
- 📋 Listar todas las tareas
- 📌 Filtrar por tareas completadas o pendientes
- ✔️ Marcar tareas como completadas
- ❌ Eliminar tareas con confirmación
- 💾 Guardado automático en `data/tareas.json`
- ⚙️ Uso de `lodash` para:
  - Ordenar tareas
  - Eliminar duplicados
  - Validar entradas vacías
  - Agrupar/filtrar dinámicamente
- 🎨 Compatible con colores (`chalk`) para mejor experiencia UX (opcional)

---

## 📁 Estructura del Proyecto
```
gestor-tareas/
├── controllers/
│ └── tareasController.js
├── data/
│ └── tareas.json
├── helpers/
│ └── menu.js
├── models/
│ └── tarea.js
├── utils/
│ └── archivo.js
├── index.js
├── package.json
└── README.md
```

---

## 💻 Requisitos

- Node.js v18 o superior
- npm

---

## 📦 Instalación

```bash
git clone https://github.com/DanielFelipeFlorezCubides/gestor-tareas
cd gestor-tareas
npm install
Automáticamente se creará el archivo data/tareas.json.

▶️ Ejecución

npm start
Te mostrará un menú interactivo para gestionar tus tareas fácilmente.

🛠️ Scripts disponibles

npm start: Ejecuta la aplicación principal
npm install: Además de instalar dependencias, crea automáticamente la carpeta y archivo de persistencia
📚 Tecnologías usadas

Node.js
Inquirer
Lodash
Chalk (opcional)
```

## 🤓 Autor

Desarrollado con café y determinación por Daniel Cubides ☕💻
Si tienes dudas o mejoras, ¡no dudes en contribuir!