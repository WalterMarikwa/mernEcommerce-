const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {type: String, required: true},
    description_type: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: Number, rquired: true},
}, {
    timestamps: true,
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;