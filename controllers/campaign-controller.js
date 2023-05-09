const express = require('express')
const { Campaign } = require('../models')

// Index
async function index(req, res, next) {
    try {
        res.json(await Campaign.find({}))
    } catch (err) {
        res.status(400).json(err)
    }
}

// Create
async function create(req, res, next) {
    try {
        res.json(await Campaign.create(req.body));
    } catch (err) {
        res.status(400).json(err);
    }
}

// Show
async function detail(req, res, next) {
    try {
        res.json(await Campaign.findById(req.params.id));
    } catch (err) {
        res.status(400).json(err);
    }
}

// Delete

// Update

module.exports = {
    index,
    create,
    detail
}