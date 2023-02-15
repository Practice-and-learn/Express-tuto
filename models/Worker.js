const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    FirstName: { type:  String, required: true },
    LastName: { type:  String, required: true },
    Biographie: { type:  String, required: false},
    Born: { type: Date, required: false },
    Nationality: { type:  String, required: false },
    Image: { type:  String, required: false },
    ocupation: { type:  Array, required: false },
    movies: [{ type: mongoose.Schema.Types.ObjectId,ref:'Movie'}],
});

module.exports = mongoose.model('Worker', workerSchema);