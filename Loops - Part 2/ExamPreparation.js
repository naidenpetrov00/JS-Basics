function solution(input) {
    let countUnpleasаndGrades = parseInt(input.shift());
    let taskName = '';
    let grade = 0;

    let badGrades = 0;
    let averageScore = 0;
    let numberOfProblems = 0;
    let nameLastProblem = '';

    while(badGrades < countUnpleasаndGrades){
        taskName = input.shift();
        if(taskName == 'Enough') break;
        grade = parseInt(input.shift());

        if(grade <= 4){
            badGrades++;
        }

        averageScore += grade; 
        numberOfProblems++;
        nameLastProblem = taskName;
    }

    if(badGrades >= countUnpleasаndGrades){
        console.log(`You need a break, ${badGrades} poor grades.`);
    }
    else{
        averageScore /= numberOfProblems;

        console.log(`Average score: ${averageScore.toFixed(2)}`)
        console.log(`Number of problems: ${numberOfProblems}`);
        console.log(`Last problem: ${nameLastProblem}`);
    }
}

solution(['2', 'Income', '3', 'Game Info', '6', 'Best Player', '4' ]);