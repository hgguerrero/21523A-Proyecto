// Se implementa el enrutador de Express
// const router = require('express').Router();

const { Router } = require('express');
const router = Router()
const {
    actualizarPublicacion,
    crearPublicacion,
    eliminarPublicacion,
    obtenerPublicaciones,
    obtenerPublicacion
} = require('../controllers/blog.controllers');


// ==================================================
//         Rutas para renderizar vistas
// ==================================================

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/publicaciones', (req, res) => {
    res.render('home')
})

router.get('/admin/publicaciones', (req, res) => {
    return res.render('tabla-publicaciones')
})

router.get('/admin/nueva-publicacion', (req, res)=> {
    return res.render('nueva-publicacion')
})

router.get('/admin/editar-publicacion/:id', (req, res)=> {
    res.render('editar-publicacion', { id: req.params.id })
})


// ==================================================
//         Rutas para CRUD de Publicaciones
// ==================================================

// Crear nueva publicación
router.post('/api/publicacion', crearPublicacion);

// Obtener todas las publicaciones
router.get('/api/publicaciones', obtenerPublicaciones);

// Obtener una publicación
router.get('/api/publicacion/:id', obtenerPublicacion)

// Actualizar una publicación
router.put('/api/publicacion/:id', actualizarPublicacion);

// Eliminar una publicación
router.delete('/api/publicacion/:id', eliminarPublicacion);

module.exports = router;