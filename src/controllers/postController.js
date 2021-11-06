const messages = require('../models/mongodb/messages.model');

// Add a new message
const createMsg = async (req, res) => {
    const text = req.body;

    try {
        const msg = await messages.create(text);
        await messages.find().select('_id text')
        return res.json({
            status: "Message added successfully",
            msg
        });      //`Message added successfully: ${msg}`
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createMsg,
};