function solve(input){
    let num = Number(input);

    let currNum = 1;
    
    for (let i = 1; i <= num; i++) {
        let outputOnLine = "";
        
        for (let j = 1; j <= i; j++) {

            if(currNum > num) break;

            outputOnLine += currNum + " ";

            currNum ++;
        }  

        console.log(outputOnLine);
    }
}

solve(15);