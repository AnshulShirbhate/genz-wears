const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    size: {type: String},
    colour: {type: String},
    price: {type: Number, required:true},
    availableQuantity: {type: Number, required:true},
}, {timestamps: true});

mongoose.models = {}
export default mongoose.model("Product", productSchema);