function solve(input) {
    const CountPeople = 4;

    let typeCruise = input.shift()
    let typeCabin = input.shift()
    let countNights = Number(input.shift());

    let pricePerNight = 0;
    let priceOfExcurcion = 0;

    if(typeCruise === "Mediterranean"){
        switch(typeCabin){
            case "standard cabin":
                pricePerNight = 27.5;
                break;
            case "cabin with balcony":
                pricePerNight = 30.2;
                break;
            case "apartment":
                pricePerNight = 40.5;
                break;
            default:
                break;
        }
    }
    else if(typeCruise === "Adriatic"){
        switch(typeCabin){
            case "standard cabin":
                pricePerNight = 22.99;
                break;
            case "cabin with balcony":
                pricePerNight = 25;
                break;
            case "apartment":
                pricePerNight = 34.99;
                break;
            default:
                break;
        }
    }
    else if(typeCruise === "Aegean"){
        switch(typeCabin){
            case "standard cabin":
                pricePerNight = 23;
                break;
            case "cabin with balcony":
                pricePerNight = 26.6;
                break;
            case "apartment":
                pricePerNight = 39.8;
                break;
            default:
                break;
        }
    }

    priceOfExcurcion = pricePerNight * countNights * CountPeople;

    if(countNights > 7){
        priceOfExcurcion *= 0.75;
    }

    console.log(`Annie's holiday in the ${typeCruise} sea costs ${priceOfExcurcion.toFixed(2)} lv.`);
}

solve(
    [
        "Aegean",
"standard cabin",
10

    ]
)