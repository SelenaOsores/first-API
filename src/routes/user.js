const express = require('express');
const userSchema = require('../models/user');

const router = express.Router();

//create user
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//get all users
router.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//get by ID
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//update user
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, age, dni, email, cel } = req.body;
    userSchema
        .updateOne({_id: id}, {$set: {name, age, dni, email, cel } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//delete user
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

module.exports = router;