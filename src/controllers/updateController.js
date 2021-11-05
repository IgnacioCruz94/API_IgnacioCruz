const messages = require('../models/mongodb/messages.model');

// Update a message
const updateMsg = async (req, res) => {
    const id = req.params.id;
    const text = req.body;
    const validator = await messages.findById(id);

    try {
        if (validator) {
            if (text != "") {
                await messages.findByIdAndUpdate(id, text);
                return res.send("Message updated successfully");
            } else {
                res.send("Text empty!");   
            }
        } else {
            res.send(`Could not find the id: ${id}`);
        }
    } catch (error) {
        res.status(500).send(`Error updating the message: ${error}`);
    }
};

module.exports = {
    updateMsg,
};