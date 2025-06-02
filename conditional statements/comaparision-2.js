//Find whether the number is positive or negative or zero
function numberType(callback) {
   let number = callback();
   console.log(number);
   if(number>0) {
    console.log("number is positive");
   }
   else if(number<0) {
    console.log("number is negative");
   }
   else {
    console.log("number is zero");
   }
}
numberType(() => {
   let number = -1;
   return number;
});



//