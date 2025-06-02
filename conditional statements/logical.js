//find largest number
let num1 = 12;
let num2 =6;
let num3 = 18;
if(num1>num2 && num1>num3) {
    console.log("The largest number is" +num1);
}
if(num2>num1 && num2>num3) {
    console.log("The largest number is" +num2);
}
else {
    console.log("The largest number is" +num3);
}



function largestNumber(callback) {
    let{num1, num2, num3} = callback();
    console.log(num1, num2, num3);
    if(num1>num2 && num1>num3) {
    console.log("The largest number is" +num1);
}
if(num2>num1 && num2>num3) {
    console.log("The largest number is" +num2);
}
else {
    console.log("The largest number is" +num3);
}
}
largestNumber(() => {
   let numbers = {
    num1:19,
    num2:6,
    num3:18
   };
   num1 = numbers.num1;
   num2 = numbers.num2;
   num3 = numbers.num3;
   return {num1, num2, num3};
});