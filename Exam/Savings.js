function solve(input) {
    let incomeForMonth = Number(input.shift());
    let monthsToSaveMoney = Number(input.shift());
    let sumForPersonalExpense = Number(input.shift());

    let moneyForUndefiniteSituations = incomeForMonth * 0.30;
    let savedMoneyForMonth = incomeForMonth - (sumForPersonalExpense + moneyForUndefiniteSituations);
    let savedMoneyForCertainMonths = savedMoneyForMonth * monthsToSaveMoney;

    let percentSavedMoneyFromIncome = (savedMoneyForMonth / incomeForMonth) * 100;

    console.log(`She can save ${percentSavedMoneyFromIncome.toFixed(2)}% \n${savedMoneyForCertainMonths.toFixed(2)}`);
}

solve(
    [
        1500,
    3,
800

    ]
)