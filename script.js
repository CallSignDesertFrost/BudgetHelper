let totalIncome = 0;
let totalExpenses = 0;

function addIncome() {
    const incomeInput = document.getElementById("income");
    const incomeAmount = parseFloat(incomeInput.value);

    if (!isNaN(incomeAmount) && incomeAmount > 0) {
        totalIncome += incomeAmount;
        updateBudgetDisplay();
        incomeInput.value = "";
    } else {
        alert("Please enter a valid positive number for income.");
    }
}

function addExpense() {
    const expenseInput = document.getElementById("expense");
    const expenseAmount = parseFloat(expenseInput.value);

    if (!isNaN(expenseAmount) && expenseAmount > 0) {
        totalExpenses += expenseAmount;
        updateBudgetDisplay();
        expenseInput.value = "";
    } else {
        alert("Please enter a valid positive number for expense.");
    }
}

function updateBudgetDisplay() {
    const totalIncomeElement = document.getElementById("total-income");
    const totalExpensesElement = document.getElementById("total-expenses");
    const remainingBudgetElement = document.getElementById("remaining-budget");

    totalIncomeElement.textContent = totalIncome.toFixed(2);
    totalExpensesElement.textContent = totalExpenses.toFixed(2);

    const remainingBudget = totalIncome - totalExpenses;
    remainingBudgetElement.textContent = remainingBudget.toFixed(2);
}
