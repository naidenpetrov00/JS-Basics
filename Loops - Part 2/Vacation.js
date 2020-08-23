function solve(input) {
    let moneyNeedForExcursion = Number(input.shift());
    let availableMoney = Number(input.shift());
    let command = '';
    let amountToSaveOrSpend = 0;

    let days = 0;
    let spendCount = 0;

    while(availableMoney < moneyNeedForExcursion){
        days++;

        command = input.shift();
        amountToSaveOrSpend = Number(input.shift());

        if(command == 'spend'){
            if(amountToSaveOrSpend >= availableMoney){
                availableMoney == 0;
            }
            else{
                availableMoney -= amountToSaveOrSpend;
            }

            spendCount++;
        }
        else if(command == 'save'){
            spendCount==0;
            availableMoney += amountToSaveOrSpend;
        }

        if(spendCount == 5){
            break;
        }
    }
    if(spendCount == 5){
        console.log("You can't save the money.");
        console.log(days);
    }
    else if(availableMoney >= moneyNeedForExcursion){
        console.log(`You saved the money for ${days} days.`);
    }

}

solve([
    '110',   '60',    'spend',
    '10',    'spend', '10',
    'spend', '10',    'spend',
    '10',    'spend', '10'
  ]);