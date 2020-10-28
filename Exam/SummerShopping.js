function solve(input){
    let budget = Number(input.shift());
    let beachTowelPrice = Number(input.shift());
    let percentDiscount = Number(input.shift());

    let umbrellaPrice = (beachTowelPrice / 3) * 2;
    let flipFlopsPrice = umbrellaPrice * 0.75;
    let beachBagPrice = (flipFlopsPrice + beachTowelPrice) / 3;

    let neededSum = (beachTowelPrice + umbrellaPrice + flipFlopsPrice + beachBagPrice) * ((100 - percentDiscount) * 0.01);

    let priceDifference = Math.abs(budget - neededSum);

    if (budget >= neededSum.toFixed(2)){
        console.log(`Annie's sum is ${neededSum.toFixed(2)} lv. She has ${priceDifference.toFixed(2)} lv. left.`);
    }
    else{
        console.log(`Annie's sum is ${neededSum.toFixed(2)} lv. She needs ${priceDifference.toFixed(2)} lv. more.`);
    }
}
//43.97
solve(
    [
        43.97,
        17,
        3
    ]
)