const expenseControllers = require('../controller/expense')
const router = require('Router')

router.post('/postbalance',expenseControllers.postBalance)