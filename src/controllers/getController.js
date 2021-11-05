const messages = require('../models/mongodb/messages.model');

// Fecth all messages
const getAll = async (req, res) => {
    const msgs = await messages.find({});

    try {
        res.send(msgs);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    getAll,
};

