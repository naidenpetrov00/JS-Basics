function solve(input){
    let playerName = input.shift();
    let countPlayedGames = Number(input.shift());

    let gameName = "";
    let totalPoints = 0;
    let currPoints = 0;

    let volleyballGamesCount = 0;
    let tennisGamesCount = 0;
    let badmintonGamesCount = 0;
    let volleyballPoints = 0;
    let tennisPoints = 0;
    let badmintonPoints = 0;

    for(let i = 0; i < countPlayedGames; i++){
        gameName = input.shift();
        currPoints = Number(input.shift());

        switch(gameName){
            case "volleyball":
            volleyballGamesCount++;
            volleyballPoints += currPoints * 1.07;

                break;
            case "tennis":
                tennisGamesCount++;
                tennisPoints += currPoints * 1.05;

                break;
            case "badminton":
                badmintonGamesCount++;
                badmintonPoints += currPoints * 1.02;

                break;
            default:
                break;
        }
    }

    let volleyballAveragePoints = (volleyballPoints / volleyballGamesCount);
    let tennisAveragePoints = tennisPoints / tennisGamesCount;
    let badmintonAveragePoints = badmintonPoints / badmintonGamesCount;
    
    totalPoints = volleyballPoints + tennisPoints + badmintonPoints;
    totalPoints = Math.floor(totalPoints)

    if(volleyballAveragePoints < 75 
        || tennisAveragePoints < 75
        || badmintonAveragePoints < 75){

        console.log(`Sorry, ${playerName}, you lost. Your points are only ${totalPoints}.`);
    }
    else{
        console.log(`Congratulations, ${playerName}! You won the cruise games with ${totalPoints} points.`);
    }
}

solve(
    ["Ivan",
        7,
        "volleyball",
        70,
        "tennis",
        100,
        "badminton",
        64,
        "volleyball",
        125,
        "tennis",
        62,
        "tennis",
        72,
        "badminton",
        87
        
    ]
)