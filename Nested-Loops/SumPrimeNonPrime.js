function solve(input) {
    let command = input.shift();
    let primeSum = 0;
    let nonPrimeSum = 0;
    let isPrime = true;

    while(command != "stop"){
        if(command == 1) nonPrimeSum += 1;
        else{

            for(let i = 2; i < command; i++){
    
                if(command < 0){
                    console.log("Number is negative.");
                     continue;
                }
                if(command % i == 0){
                    isPrime = false;
                    break;
                }
            }
        }

        if(isPrime){
            primeSum += command;
        }
        else{
            nonPrimeSum += command;
        }

        command = input.shift();
        isPrime = true;
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}

solve
(
    [
        30,
        83,
        33,
        -1,
        20,
        "stop"
        
    ]
)