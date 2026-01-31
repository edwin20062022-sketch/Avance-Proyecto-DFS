# Fitnessstudio API – MVP

Este proyecto es el primer avance del sistema Fitnessstudio, una solución de gestión para gimnasios.

Consiste en una API REST desarrollada con Node.js y Express que permite administrar miembros mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

Los datos se almacenan en memoria utilizando arreglos, sin base de datos, cumpliendo con los requisitos del MVP del proyecto final.

## Tecnologías usadas
- Node.js
- Express

## Cómo ejecutar el proyecto

1. Instalar dependencias:
npm install

2. Ejecutar el servidor:
node index.js

Servidor disponible en:
http://localhost:3000

## Endpoints

GET /miembros → Lista todos los miembros  
POST /miembros → Crea un nuevo miembro  
PUT /miembros/:id → Actualiza un miembro  
DELETE /miembros/:id → Elimina un miembro
