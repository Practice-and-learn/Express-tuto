const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    pseudo: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true,},
    xp: { type: Number, required: false, default: 0 },
    level: { type: Number, required: false, default: 0 },
    avatar: { type: String, required: false, default: 'https://imgs.search.brave.com/kYLb4EaDanYhpUwq8nYqdyMmGKf-T3yizYuE8Ic7JqE/rs:fit:974:1080:1/g:ce/aHR0cHM6Ly9jZG41/LnZlY3RvcnN0b2Nr/LmNvbS9pLzEwMDB4/MTAwMC81MS85OS9p/Y29uLW9mLXVzZXIt/YXZhdGFyLWZvci13/ZWItc2l0ZS1vci1t/b2JpbGUtYXBwLXZl/Y3Rvci0zMTI1MTk5/LmpwZw' },
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);