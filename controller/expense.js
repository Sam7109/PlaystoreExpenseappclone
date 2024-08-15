const Expense = require('../model/expense')


exports.calculateDailybal = async (req, res) => {
    try {
        const { date } = req.body;
        const expenses = await Expense.findAll({
            where: {
                date: date
            }
        });

        let totalCredit = 0;
        let totalDebit = 0;

        expenses.forEach(expense => {
            totalCredit += expense.credited;
            totalDebit += expense.debited;
        });

        const balance = totalCredit - totalDebit;

        res.status(200).json({
            balance
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }   
}


exports.postBalance = async(req,res)=>{
    try{
        const{description,amount,startdate,enddate,credit,debit} = req.body
        const creditedAmount = null
        const debitedAmount = null

        if(!credit){
            creditedAmount = credit;
        }
        else {
            debitedAmount = debit;
        }

        const newExpense = await Expense.create({
            description,
            amount,
            startDate: startdate,
            endDate: enddate,
            credited: creditedAmount,
            debited: debitedAmount
        });
        res.status(201).json({newExpense})
    }
    catch(error){
        console.log(error)
        res.status(500)
    }
}