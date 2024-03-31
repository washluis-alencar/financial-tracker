const {addIncome, getIncomes, deleteIncome} = require("../controllers/income");
const router = require('express').Router();

router
    .post('/incomes', addIncome)
    .get('/incomes', getIncomes)
    .delete('/incomes/:id', deleteIncome)

module.exports = router;