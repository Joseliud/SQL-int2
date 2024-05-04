const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const user =await User.findAll()
    return res.json(user)
});

const create = catchError(async(req, res) => {
    const { firstName, lastName, email, password, birthday } = req.body
    const user = await User.create ({
        firstName,
        lastName,
        email,
        password,
        birthday,
    })
    return res.status(201).json(user)
});

const getOne = catchError(async(req, res) =>{
    const { id } = req.params;
    const user = await User.findByPk(id)
    return res.json(user)
});

const remove = catchError(async(req, res) => {
    const { id }= req.params;
    await User.destroy({ where: { id:id }})
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id }= req.params;
    const { firstName, lastName, email, password, birthday } = req.body
    const user = await User.update({
        firstName,
        lastName,
        email,
        password,
        birthday,
    }, { where: { id:id}, returning: true})
    return res.json(user)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}