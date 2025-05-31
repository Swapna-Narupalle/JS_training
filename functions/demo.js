function movieName(callback) {
     callback();
}
movieName(() => {
    console.log("Devara");
});

function movieName(callback) {
    setTimeout(() => {
    callback();
    },5000);
}
movieName(() => {
    console.log("Devara");
});


let VotersEligibilityage =18;
function VotersEligibility(Person1age, callback) {
    let Person2age = callback();
    if(Person1age>=18 && Person2age>=18) {
        console.log("Person1 and Person2 are eligible for voting");
    }
    else if(Person1age>=18) {
        console.log("Person1 is eligible for voting");
    }
    else if(Person2age>=18) {
        console.log("Person2 is eligible for voting");
    }
    else {
        console.log("Person1 and Person2 are not eligible for voting");
    }
}
VotersEligibility(12,() => {
    let Person2age= 12;
    return Person2age;
});



function actorName(callback) {
    let actor = callback();
    console.log(actor);
}
actorName(() => {
    let actor = "NTR";
    setTimeout(() => {
    return actor;
    },3000);
});



function add(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}
 
function mul(a,b) {
    return a*b;
}

function calc(a,b,callback) {
    return callback(a,b);
}
console.log(calc(10,20,add));
console.log(calc(10,20,sub));
console.log(calc(10,20,mul));