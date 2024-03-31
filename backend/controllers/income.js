const incomeSchema = require('../models/incomeModel');

exports.addIncome = async (req, res) => {
    const {title, amount, description, category, date} = req.body;
    try {
        const income = incomeSchema({
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

        await income.save();
        res.status(201).send(income);
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await incomeSchema.find().sort({createdAt: -1});
        res.status(200).send(incomes)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

exports.deleteIncome = async (req, res) => {
    try {
        await incomeSchema.findByIdAndDelete(req.params.id);
        res.status(202).send({message: 'Income deleted successfully'})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}