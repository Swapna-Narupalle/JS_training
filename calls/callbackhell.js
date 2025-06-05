//callbackhell
/*-------------------------------------------------------------------
function sleep(milliseconds) {
    var startDateTime = new Date().getTime()
    var endDateTime = startDateTime+milliseconds
    while(new Date().getTime()<endDateTime) {

    }
}
    */
/*
function Testsleep() {
    console.time("sleep");
    sleep(3000);
    console.timeEnd("sleep");
    console.log("Task is completed!!!");
}
Testsleep();
*/


//callbackhell leads to the synchronous calls
/*
function movieName(callback) {
     sleep(5000);
     console.log("movieName: RRR");
     callback();
}

function movieDirector(callback) {
     sleep(2000);
     console.log("movieDirector: Rajamouli");
     callback();
}


function movieActor() {
     sleep(7000);
     console.log("movieActor: NTR");
}

console.time("mymovietime");
movieName(() => {
    movieDirector(() => {
        movieActor();
    });
});
console.timeEnd("mymovietime");
console.log("Iam watched the movie!!!");
*///--------------------------------------------------------------------------------

//synchromous calls
function sleep(milliseconds) {
    var startDateTime = new Date().getTime()
    var endDateTime = startDateTime+milliseconds
    while(new Date().getTime()<endDateTime) {

    }
}

function movieName() {
     sleep(5000);
     console.log("movieName: RRR");
}

function movieDirector() {
     sleep(2000);
     console.log("movieDirector: Rajamouli");
}


function movieActor() {
     sleep(7000);
     console.log("movieActor: NTR");
}

console.time("mymovietime");
movieName();
movieDirector();
movieActor();
console.timeEnd("mymovietime");
console.log("Iam watched the movie!!!");