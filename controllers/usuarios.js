const { response } = require('express');


const usuariosGet = (req, res = response) => {

    res.json({
        msg: 'get API - controlador',
        body
    })
  }

const usuariosPost = (req, res = response) => {

    //const body = req.body; se pueden enviar asi para recibir toda la info que tenga que req
    const { nombre , edad } = req.body;
    
    res.status(201).json({
        msg: 'post API- controlador',
        nombre, //y aca agregamos los datos que nos sirvan o lo que queramos dejar y obviar informacion que no necesitemos. 
        edad
    })
  }

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.status(500).json({
        msg: 'put API - controlador',
        id
    })
  }

const usuariosPatch = (req, res = response) => {

    res.json({
        msg: 'patch API - controlador'
    })
  }

const usuarioDelete = (req, res = response) => {

    res.json({
        msg: 'delete API - controlador'
    })
  } 

  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPatch,
    usuariosPost,
    usuarioDelete
  }