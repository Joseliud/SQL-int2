const { getAll, create, getOne, remove, update } = require('../controllers/User.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/users")
		.get(getAll)
        .post(create);

userRouter.route("/users/:id")
        .put(getOne)
        .delete(remove)
        .put(update)

module.exports = userRouter;