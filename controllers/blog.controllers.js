const ctrl = {}
const Publicaciones = require('../models/Publicaciones');

ctrl.crearPublicacion = async (req, res) => {
    try {
        // Se crea una nueva publicación
        const publicacion = await Publicaciones.create(req.body);
        res.send({
            msg: "Publicación creada con éxito",
            publicacion
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Error al crear nueva publicación"
        })
    }

}


ctrl.obtenerPublicaciones = async (req, res) => {
    try {
    const publicaciones = await Publicaciones.findAll();
    res.json(publicaciones)
} catch (error) {
    console.log(error)
    return res.status(500).json({
        msg: "Error al obtener las publicaciones"
    })
}
}

ctrl.actualizarPublicacion = async (req, res) => {
    try { 
    const { id } = req.params;

    const publicacion = await Publicaciones.findByPk(id)
    publicacion.set(req.body)

    await publicacion.save() // Con esta instrucción se guarda en la BD

    res.json({
        msg: "Publicación actualizada correctamente"
    });
} catch (error) {
  console.error("Error al actualizar la publicación:", error);
  res.status(500).json({ msg: "Error al actualizar la publicación" });
}
};


ctrl.eliminarPublicacion = async (req, res) => {
    try {
    const { id } = req.params;

    await Publicaciones.destroy({
        where: {
            id
        }
    });

    res.json({
        msg: "Publicación eliminada correctamente"
    });
} catch (error) {
  console.error("Error al eliminar la publicación:", error);
  res.status(500).json({ msg: "Error al eliminar la publicación" });
}
};



ctrl.obtenerPublicacion = async (req, res) => {
    try {
    const publicacion = await Publicaciones.findByPk(req.params.id)
    return  res.json(publicacion)
} catch (error) {
 console.log(error)
 return res.status(500).json({
     msg: "Error al obtener la publicación"
 })
 } 
}

module.exports = ctrl;