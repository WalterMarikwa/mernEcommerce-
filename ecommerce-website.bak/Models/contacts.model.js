const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
   firstName: {type: String, required: true},
   lastName: {type: String, required: true},
   email: {type: String, required: true},
   adress: {type: String, required: true},
   comments: {type: String, required: true},
}, {
    timestamps: true,
});

const Contacts = mongoose.model('Contacts', contactSchema);

module.exports = Contacts;