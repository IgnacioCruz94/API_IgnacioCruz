const messages = require('../models/mongodb/messages.model');

// Update a message
const deleteMsg = async (req, res) => {
    const id = req.params.id;

    try {
        const findid = await messages.findById(id);
        if (findid) {
            await messages.findByIdAndDelete(id);
            return res.send(`Has deleted succesfully the messagge with id: ${id}`);
        } else {
            res.send(`Could not find the id: ${id}`);
        }    
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    deleteMsg,
};