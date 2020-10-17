function solve(input){
    let firstNum = Number(input.shift());
    let secondNum =  Number(input.shift());

    let evenNums = 0;
    let oddNums = 0;
    let currNum = 0;
    let currDigit = 0;
    let currLine = "";

    for(let i =  firstNum + 1; i < secondNum ; i++){
        evenNums = 0;
        oddNums = 0;
        currNum = "" + i;

        for(let j = 0 ; j < currNum.length ; j++){
            currDigit = Number(currNum[j]);

            if (j % 2 == 0){
                evenNums += currDigit;
            }
            else{
                oddNums += currDigit;
            }
        }

        if(evenNums == oddNums && evenNums != 0){
            currLine += currNum + " ";
        }
    }
    console.log(currLine);
}

solve([100000,
    100050    
    ])