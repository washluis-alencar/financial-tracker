const mongoose = require('mongoose');

// define the schema for the expense model and export the model

const expenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxlength: 20
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'expense'
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Expense', expenseSchema)