const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Base de datos en memoria (arreglo de miembros)
let miembros = [
  {
    id: 0,
    nombre: "Juan Pérez",
    tipoMembresia: "Premium",
    meses: 12
  },
  {
    id: 1,
    nombre: "María González",
    tipoMembresia: "Básica",
    meses: 6
  },
  {
    id: 2,
    nombre: "Carlos Ramírez",
    tipoMembresia: "Premium",
    meses: 3
  }
];

// Información de la API
app.get('/', (req, res) => {
    res.json({
        message: "Bienvenido a Fitnessstudio API",
        descripcion: "Sistema de gestión para gimnasios",
        version: "1.0.0",
        endpoints: {
            listarMiembros: "GET /miembros",
            crearMiembro: "POST /miembros",
            actualizarMiembro: "PUT /miembros/:id",
            eliminarMiembro: "DELETE /miembros/:id"
        }
    });
});

// GET
app.get('/miembros', (req, res) => {
  res.json(miembros);
});

// POST
app.post('/miembros', (req, res) => {
  const nuevoMiembro = req.body;
  miembros.push(nuevoMiembro);
  res.status(201).json(nuevoMiembro);
});

// PUT
app.put('/miembros/:id', (req, res) => {
  const id = req.params.id;
  miembros[id] = req.body;
  res.json(miembros[id]);
});

// DELETE
app.delete('/miembros/:id', (req, res) => {
  const id = req.params.id;
  miembros.splice(id, 1);
  res.send('Miembro eliminado');
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});