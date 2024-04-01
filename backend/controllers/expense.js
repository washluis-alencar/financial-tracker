const expenseSchema = require('../models/expenseModel');

exports.addExpense = async (req, res) => {
    const {title, amount, description, category, date} = req.body;
    try {
        const expense = expenseSchema({
            title,
            amount,
            description,
            category,
            date
        })

        if (!title || !amount || !description || !category || !date) {
            return res.status(400).send({message: 'All fields are required'})
        }

        if (amount <= 0 || !amount === 'number') return res.status(400).send({message: 'Amount must be greater than 0'})

        await expense.save();
        res.status(201).send(expense);
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await expenseSchema.find().sort({createdAt: -1});
        res.status(200).send(expenses)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.deleteExpense = async (req, res) => {
    try {
        await expenseSchema.findByIdAndDelete(req.params.id);
        res.status(202).send({message: 'Expense deleted successfully'})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}