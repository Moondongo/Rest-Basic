const { response, request } = require('express');
const { post } = require('../routes/user');

const usuariosGet = (req = request, res = response) => {
    const query = req.query;
    res.json({
        type: 'GET Controlador',
        query,
    });
};

const usuariosPut = (req, res = response) => {
    const id = req.params.id;

    res.json({
        type: 'PUT Controlador',
        id,
    });
};

const usuariosPost = (req, res = response) => {
    const body = req.body;

    res.json({
        type: 'POST',
        body,
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        type: 'DELETE Controlador',
    });
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
};
