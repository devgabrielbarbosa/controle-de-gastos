import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Resume from "./components/Resume";
import GlobalStyle from "./styles/global";
import Formulario from "./components/Formulario";
const App = () =>{
    const data = localStorage.getItem("transactions");
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );

    const [income, setIncome] = useState (0);
    const [expense, setExpense] = useState (0);
    const [total, setTotal] = useState (0);

    useEffect(() =>{
        const amountExpense = transactionsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount));

        const amountIncome = transactionsList
        .filter((item) => !item.expense)
        .map((transaction) => Number(transaction.amount));


        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2)
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2)

        const total = Math.abs(income - expense).toFixed(2)

        setIncome(`R$ ${income.replace('.', ',')}`)
        setExpense(`R$ ${expense.replace('.', ',')}`)
        setTotal(`${Number(income) < Number(expense) ? "-":""} R$ ${total.replace('.', ',')}`)
    }, [transactionsList]);
     
    const handleAdd = (transaction) => {
        const newArreyTransactions = [...transactionsList, transaction];

        setTransactionsList(newArreyTransactions);

        localStorage.setItem("transactions", JSON.stringify(newArreyTransactions));
    };

    return(
        <>
        <Header/>
        <Resume income={income} expense={expense} total={total}/>
        <Formulario handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
        <GlobalStyle />
        </>
    );
}

export default App;