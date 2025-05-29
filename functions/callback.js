/*
function movieName(movie) {
    movie("RRR");
}
movieName((m1) => {
   console.log(m1);//RRR
});
*/


/*
function movieName(movie) {
    movie();
}
movieName(() => {
   console.log("RRR");//RRR
});
*/


/*
function showmovieDetails(callback) {
    callback();
}
showmovieDetails(() => {
    let movieDetails = {
        moviename : "RRR",
        actor : "NTR",
        Director : "Rajamouli"
    };
    console.log(movieDetails);
});
*/


/*
function showmovieDetails(callback) {
    result=callback();
    console.log(result);
}
showmovieDetails(() => {
    let movieDetails = {
        moviename : "RRR",
        actor : "NTR",
        Director : "Rajamouli"
    };
    return movieDetails;
});
*/



function voterseligibility(Person1age, callback) {
        let Person2age = callback();
        if(Person1age>=18) {
            console.log("Person1 is eligible for voting");
        }
        else if(Person2age>=18) {
            console.log("Person2 is eligible for voting");
        }
        else {
            console.log("Person1 and person2 are not eligible for voting");
        }
}
voterseligibility(18,() => {
    let Person2age = 12;
    return Person2age;
});
