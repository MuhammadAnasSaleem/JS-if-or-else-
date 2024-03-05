function result (){
var totalNum = 200;
console.log(` Total number is 200 `);
var obtainednum = Number(input1.value) + Number(input2.value)
console.log(`your obtained marks is ${obtainednum}`)
var percentage = obtainednum/totalNum*100;
console.log(`Your percentage is ${percentage}`);
if (percentage >= 1 && 30 >= percentage){
    console.log(`You need to work hard you got 'F'`);
}
else if (percentage >= 31 && 50 >= percentage){
    console.log(`Your grade is 'D'`);
}
else if (percentage >= 51 && 60 >= percentage){
    console.log(`Your grade is 'C'`);
}
else if (percentage >= 61 && 70 >= percentage){
    console.log(`Your grade is 'B'`);
}
else if (percentage >= 71 && 80 >= percentage){
    console.log(`Your grade is 'A'`);
}
else if(percentage >= 81 && 100 >= percentage){
    console.log(`Your grade is 'A+'`);
}
}