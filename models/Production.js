const mongoose = require('mongoose');

const productionSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: false},
    image: { type: String, required: false},
    movies: [{ type: mongoose.Schema.Types.ObjectId,ref:'Movie'}],
});

module.exports = mongoose.model('Production', productionSchema);