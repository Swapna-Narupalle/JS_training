//function
function movieName() {
    console.log("RRR");
}
//movieName();//RRR

//callback Functions

function add(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

function mul(a,b) {
    return a*b;
}

function div(a,b) {
    return a/b;
}

function calc(a,b,callback) {
    return callback(a,b);
}
//console.log(calc("20",10));
// console.log(calc(20,10,sub));
// console.log(calc(20,10,mul));
// console.log(calc(20,10,div));

/*
function showmovieDetails(callback) {
    let details = callback();
    console.log(details);
}
showmovieDetails(() => {
    let movieDetails = {
        movieName: "RRR",
        movieActor:"NTR"
    };
    return `movieName:${movieDetails.movieName} , movieActor:${movieDetails.movieActor}`;
});
*/


function showmovieDetails(callback) {
    let {movieName, movieActor} = callback();
    console.log(`movieName:${movieName} , movieActor:${movieActor}`);
}
showmovieDetails(() => {
    let movieDetails = {
        movieName: "RRR",
        movieActor:"NTR"
    };
    return movieDetails;
});



