function phoneNumber(callback) {
    let phNumber = callback();
    console.log(phNumber);
    if(phNumber==10) {
        console.log("It is a valid phone number");
    }
    else {
        console.log("phone is invalid");
    }
}
phoneNumber(() => {
    let number = "9010244141";
    let phNumber = number.length;
    return phNumber;
});


let isactor =true;
if(isactor) {
    console.log("He is a actor");
}
else {
    console.log("He is not an actor");
}



//even or odd number
function numberType(callback) {
    let number = callback();
    console.log(number);
    if(number%2==0) {
        console.log("It is a even number");
    }
    else {
        console.log("It is a odd number");
    }
}
numberType(() => {
    let number = 21;
    return number;
});



let votersEligibilityage = 18;
function votersEligibility(Person1age, callback) {
    let Person2age = callback();
    if(Person1age>=18 && Person2age>=18) {
        console.log("Person1 and Person2 are eligible for voting");
    }
    else if(Person1age>=18) {
        console.log("only Person1 is Eligible for voting");
    }
    else if(Person2age>=18) {
        console.log("only Person2 is Eligible for voting");
    }
    else {
        console.log("Person1 and Person2 are not eligible for voting");
    }
}
votersEligibility(12,() => {
    let Person2age = 12;
    return(Person2age);
})


let number = 6;
if(number!=6) {
    console.log("number is not equal to 6");
}
else {
    console.log("number is equal to 6");
}