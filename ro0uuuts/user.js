const express=require('express');
const  userController = require('../controller/user');

const router=express.Router();


router
.post('/',userController.createUsers )
.get('/',userController. getAllUsers)
.get('/:id',userController. getUsers )
.put('/:id',userController. replaceUsers)
.patch('/:id',userController. updateUsers)
.delete('/:id',userController. deleteUsers)

exports.router=router;