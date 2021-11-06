const { response } = require('express');
const messages = require('../models/mongodb/messages.model');

// Fecth all messages
const getAll = async (req, res) => {
    try {
    await messages.find({})
    .select('_id text')
    .then(docs => {
        const msgs = {
            Count: docs.length,
            Messages: docs.map(doc => {
                return {
                    id: doc._id,
                    text: doc.text
                }
            })
        }
        res.send(msgs);
    });    
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    getAll,
};