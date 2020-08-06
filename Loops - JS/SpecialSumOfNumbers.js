function solve(start, end, divider) {
    start = Number(start);
    end = Number(end);
    divider = Number(divider);

    let sum = 0;

    for (let i = start; i <= end; i++) {
        
        if(i % divider == 0){
            sum += i;
        }
    }

    console.log(sum);
}

solve('61', '125', '25')