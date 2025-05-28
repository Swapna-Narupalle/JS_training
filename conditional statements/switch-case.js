let isStudent = true;
let isschoolStudent = false;
let iscollegeStudent =false;
switch(isStudent) {
case isschoolStudent:{
    console.log(`He is a school student`);
    break;
}
case iscollegeStudent:{
    console.log(`He is a college student`);
    break;
}
default:{
    console.log(`He is a BTech student`);
}
}




function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':{
            result = num1 + num2;
            console.log(`${num1} + ${num2} = ${result}`);
            break;}
        case '-':{
            result = num1 - num2;
            console.log(`${num1} - ${num2} = ${result}`);
            break;}
        case '*':{
            result = num1 * num2;
            console.log(`${num1} * ${num2} = ${result}`);
            break;}
        case '/':{
            if (num2 !== 0) {
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result}`);
            } else {
                console.log("Division by zero is not allowed.");
            }
            break;}
        case '%':{
            result = num1 % num2;
            console.log(`${num1} % ${num2} = ${result}`);
            break;}
        default:{
            console.log("Invalid operator. Please use +, -, *, /, or %.");
        }
    }
}

// Example usage:
calculate(10, 5, '+');  // Output: 10 + 5 = 15
calculate(10, 5, '-');  // Output: 10 - 5 = 5
calculate(10, 5, '*');  // Output: 10 * 5 = 50
calculate(10, 5, '/');  // Output: 10 / 5 = 2
calculate(10, 5, '%');  // Output: 10 % 5 = 0