const router = require('express').Router();
let Contacts = require('../models/contacts.model');

router.get('/', (req, res) => {
    Contacts.find({})
    .then(Contacts => res.json(Contacts))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;