const { Encounter } = require('../models')

async function index(req, res, next) {
    try {
        res.json(await Encounter.find({}))
    } catch (err) {
        res.status(400).json(err)
    }
}

async function create(req, res, next) {
    try {
        res.json(await Encounter.create(req.body));
    } catch (err) {
        res.status(400).json(err);
    }
}

async function detail(req, res, next) {
    try {
        res.json(await Encounter.findById(req.params.id));
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports = {
    index,
    create,
    detail
}