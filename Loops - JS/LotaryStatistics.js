function solve(maxNum) {
    maxNum = Number(maxNum);
    singularOddNums = 0;
    evenNums = 0;
    oddEndingWithSevenNums = 0;
    numsDivisibleBy100WithoutRemainder = 0;

    for (let i = 1; i <= maxNum ; i++) {
        if(i % 2 != 0){

            if(i < 10){
                singularOddNums++;
            }

            if(i.toString().endsWith('7')){
                oddEndingWithSevenNums++;
            }
        }
        else{
            evenNums++;
        }

        if(100 % i == 0){
            numsDivisibleBy100WithoutRemainder++;
        }

    }

    let percentSingularOddNums = (singularOddNums / maxNum) * 100;
    let percentEvenNums = (evenNums / maxNum) * 100;
    let percentOddEndingWithSevenNums = (oddEndingWithSevenNums / maxNum) * 100;
    let percentNumsDivisibleBy100WithoutRemainder = (numsDivisibleBy100WithoutRemainder / maxNum) * 100;

    console.log(percentSingularOddNums.toFixed(2) + '%');
    console.log(percentEvenNums.toFixed(2) + '%');
    console.log(percentOddEndingWithSevenNums.toFixed(2) + '%');
    console.log(percentNumsDivisibleBy100WithoutRemainder.toFixed(2) + '%');
}

solve('35')