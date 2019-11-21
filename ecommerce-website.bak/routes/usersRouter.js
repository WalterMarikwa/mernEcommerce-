const express = require('express')
let usersCtrl =   require('../controllers')
let verifyToken = require('../auth').verifyToken

const usersRouter = new express.Router()

usersRouter.get('/', usersCtrl.index)

usersRouter.post('/', usersCtrl.create)

usersRouter.post('/authenticate', usersCtrl.authenticate)

usersRouter.use(verifyToken)

usersRouter.get('/:id', usersCtrl.show)

usersRouter.patch('/:id', usersCtrl.update)

usersRouter.delete('/:id', usersCtrl.destroy)

module.exports = usersRouter;



