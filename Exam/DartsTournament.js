function solve(input) {
    let beginningPoints = Number(input.shift());

    let countMoves = 0;
    let bullsEyeWin = false;

    while(beginningPoints > 0){
        let targedSector = input.shift();
        let points = Number(input.shift());

        countMoves++;
        
        if(targedSector == "number section"){
            beginningPoints -= points;
        }
        else if(targedSector == "double ring"){
            points *= 2;
            beginningPoints -= points;
        }
        else if(targedSector == "triple ring"){
            points *= 3;
            beginningPoints -= points;
        }
        else if(targedSector == "bullseye"){
            bullsEyeWin = true;
            break;
        }
    }

    if(beginningPoints == 0){
        console.log(`Congratulations! You won the game in ${countMoves} moves!`);
    }
    else if(beginningPoints < 0){
        beginningPoints = Math.abs(beginningPoints);
        console.log(`Sorry, you lost. Score difference: ${beginningPoints}.`);
    }
    else if(bullsEyeWin){
        console.log(`Congratulations! You won the game with a bullseye in ${countMoves} moves!`);
    }
}

solve(
    [75,
        "triple ring",
        17,
        "number section",
        16,
        "triple ring",
        13,
        "double ring",
        10
        
    ]
)