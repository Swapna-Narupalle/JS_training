//logical operators
/*--------------------------------------
let name ="Swapna";
let sirName = "Narupalle";
if(name=="Swapna" && sirName=="Narupalle") {
    console.log(name , sirName);
}
else {
    console.log("wrong name is provided");
}
*///------------------------------------------


/*---------------------------------------------------
let movieName = "Devara";
let movieActor = "NTR";
if(movieName =="Devara" && movieActor=="NTR") {
    console.log("correct movieDetails are provided");
}
else if(movieName =="Devara" || movieActor=="Ramcharan") {
    console.log("movieDetails are partially correct");
}
else {
    console.log("movieDetails are incorrect");
}
*///-----------------------------------------------------


function showmovieDetails(callback) {
    let { movieName, movieActor } = callback();
    //console.log(movieName, movieActor);
    if (movieName == "Devara" && movieActor == "NTR") {
        console.log("correct movieDetails are provided");
    }
    else if (movieName == "Devara" || movieActor == "Ramcharan") {
        console.log("movieDetails are partially correct");
    }
    else {
        console.log("movieDetails are incorrect");
    }
}
showmovieDetails(() => {
    let movieDetails = {
        movieName: "Devara",
        movieActor: "NTR"
    };
    return movieDetails;
})






//find largest number
/*
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
*/


function largestNumber(callback) {
    let { num1, num2, num3 } = callback();
    //console.log(num1, num2, num3);
    if (num1 > num2 && num1 > num3) {
        console.log("The largest number is" + num1);
    }
    else if (num2 > num1 && num2 > num3) {
        console.log("The largest number is" + num2);
    }
    else {
        console.log("The largest number is" + num3);
    }
}
largestNumber(() => {
    let numbers = {
        num1: 19,
        num2: 21,
        num3: 18
    };
    return numbers;
});