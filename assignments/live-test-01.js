function gradeCalculator(grade){
    var letter_grade;
    if(grade >= 90 && grade <= 100){
        letter_grade = "A";
    }
    if(grade >= 80 && grade <=89){
        letter_grade = "B";
    }
    if(grade >= 70 && grade <= 79){
        letter_grade = "C";
    }
    if(grade >= 60 && grade <= 69){
        letter_grade = "D";
    }
    if(grade <= 59 && grade >= 0){
        letter_grade = "F";
    }

    if(grade > 100 || grade < 0){
        letter_grade = "Grade should be between 0 - 100";
    }

    return letter_grade;
}

var grade = gradeCalculator(85);
console.log(grade);