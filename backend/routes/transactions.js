const {addIncome, getIncomes, deleteIncome} = require("../controllers/income");
const {addExpense, getExpenses} = require("../controllers/expense");
const router = require('express').Router();

router
    .post('/incomes', addIncome)
    .get('/incomes', getIncomes)
    .delete('/incomes/:id', deleteIncome)
    .post('/expenses', addExpense)
    .get('/expenses', getExpenses)
    .delete('/expense/:id', deleteIncome)


module.exports = router;