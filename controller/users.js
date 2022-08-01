const { response } = require('express');

const userGet = (req, res = response) => {
    const id = req.params.id;

    res.json({
        id,
        msg: 'Get API'
    })
}

const userPost = (req, res) => {

    const {  nombre, edad } = req.body;
    res.status(201).json({
        msg: 'Post API',
        nombre,
        edad,
    })
}

const userPut = (req, res) => {

    const id = req.params.id;
    const {apodo, limite = 5} = req.query;

    res.json({
        id,
        msg: 'Put API',
        apodo,
        limite
    })
}

const userDelete = (req, res) => {
    res.json({
        id: 4,
        msg: 'Delete API'
    })
}

const userPatch = (req, res) => {
    res.json({
        id: 5,
        msg: 'Patch API'
    })
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
    userPatch,
}