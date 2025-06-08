//Example1
let downloadMovie = new Promise((resolve, reject) => {
    let isSuccess = true;
    if (isSuccess) {
        resolve("movie downloaded successfully!!!");
    }
    else {
        reject("download failed due to slow internet.");
    }
});
downloadMovie
    .then((result) => {
        console.log(result);
    })
    .catch((exception) => {
        console.log(exception);
    });


//Example2
let weightLose = new Promise((successfn, failurefn) => {
    let isweightLost = false;
    if (isweightLost) {
        successfn("He successfully lost his weight");
    }
    else {
        failurefn("He failed to lose weight because he ate too much food.");
    }
});
weightLose
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });


//Example3
function getstudentDetails() {
    return new Promise((successfn) => {
        setTimeout(() => {
            successfn("student Details are collected successfully");
        });
    });
};
getstudentDetails()
    .then((result) => {
        console.log(result);
    });


//Example4 chaining mechanism 
/*
function getfirstMoviedetails() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("First task is completed successfully......");
            resolve("NTR's first movie is Student_no_1");
        }, 5000);
    });
};

function getsecondMoviedetails() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second task is completed successfully......");
            resolve("NTR's second movie is Simhadri");
        }, 2000);
    });
};

function getthirdMoviedetails() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("third task is completed successfully......")
            resolve("NTR's third movie is Brundavanam");
        }, 3000);
    });
};
console.time("starttime");
getfirstMoviedetails()
    .then((getfirstMoviedetails) => {
        console.log(getfirstMoviedetails);
       return getsecondMoviedetails()
    }).then((getsecondMoviedetails) => {
        console.log(getsecondMoviedetails);
       return getthirdMoviedetails()
    }).then((getthirdMoviedetails) => {
        console.log(getthirdMoviedetails);
        console.timeEnd("starttime");
    });
    */
//but the chaining mechanism leads to the synchronous calls.so, for getting asynchronous calls we can use Promise.all keyword.


//Example5

function getfirstMoviedetails() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("First task is completed successfully......");
            resolve("NTR's first movie is Student_no_1");
        }, 5000);
    });
};

function getsecondMoviedetails() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second task is completed successfully......");
            resolve("NTR's second movie is Simhadri");
        }, 2000);
    });
};

function getthirdMoviedetails() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("third task is completed successfully......")
            resolve("NTR's third movie is Brundavanam");
        }, 3000);
    });
};
console.time("starttime");
Promise.all([getfirstMoviedetails(), getsecondMoviedetails(),getthirdMoviedetails()])
     .then((notifications)=>{
        console.log(notifications);
        console.timeEnd("starttime");
     });
