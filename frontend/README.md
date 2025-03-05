# Task Manager App

¡Bienvenido a **Task Manager**! Esta es una aplicación web para gestionar tareas, desarrollada con **React**, **Vite**, **Tailwind CSS** y **JSON Server**. Permite crear, marcar como completadas y visualizar tareas de manera sencilla.

---

## **Características principales**

- **Crear tareas**: Añade nuevas tareas con un título y una descripción.
- **Marcar como completadas**: Marca o desmarca tareas como completadas.
- **Listas separadas**: Las tareas se dividen en "Pendientes" y "Completadas".
- **Persistencia de datos**: Las tareas se guardan en un archivo `db.json` usando JSON Server.
- **Interfaz moderna**: Diseño responsivo y atractivo gracias a Tailwind CSS.

---

## **Tecnologías utilizadas**

- **Frontend**:
  - React
  - Vite
  - Tailwind CSS
  - React Router (para la navegación entre vistas)
- **Backend**:
  - JSON Server (simulación de API REST)
- **Herramientas**:
  - TypeScript
  - Fetch API (para las solicitudes HTTP)

---

## **Instalación y configuración**

Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local.

### **Requisitos previos**

- Node.js (v16 o superior)
- npm (v8 o superior)

### **Pasos para ejecutar la aplicación**

1. **Clona el repositorio**:

   git clone https://github.com/tu-usuario/task-manager-app.git
   cd task-manager-app

2. **Instala las dependencias**:

   npm install

3. **Inicia JSON Server**:
   
   Asegúrate de tener un archivo db.json en la raíz del proyecto con la siguiente estructura
   Inicia JSON Server en el puerto 3001: json-server --watch db.json --port 3001
     

3. **Inicia la aplicación**:
   
   En una terminal separada, ejecuta: npm run dev
  