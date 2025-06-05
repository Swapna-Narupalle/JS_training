//synchromous calls
/*--------------------------------------------------------------------
function sleep(milliseconds) {
    var startDateTime = new Date().getTime()
    var endDateTime = startDateTime+milliseconds
    while(new Date().getTime()<endDateTime) {

    }
}
*/
/*
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
*///-----------------------------------------------------------------------

//synchromous calls
/*-------------------------------------------------------------------------
function sleep(milliseconds) {
    var startDateTime = new Date().getTime()
    var endDateTime = startDateTime+milliseconds
    while(new Date().getTime()<endDateTime) {

    }
}

function movieDownload() {
     sleep(5000);
     console.log("movieDownload");
}

function watchingReels() {
     sleep(2000);
     console.log("watchingReels");
}


function chatwithFriends() {
     sleep(7000);
     console.log("chatwithFriends");
}

console.time("mymovietime");
movieDownload();
watchingReels();
chatwithFriends();
console.timeEnd("mymovietime");
console.log("Iam watched the movie!!!");
*///---------------------------------------------------------------------------------



//synchronous with callbackhell
function sleep(milliseconds) {
    var startDateTime = new Date().getTime()
    var endDateTime = startDateTime+milliseconds
    while(new Date().getTime()<endDateTime) {

    }
}

function movieDownload(callback) {
     sleep(5000);
     console.log("movieDownload");
     callback();
}

function watchingReels(callback) {
     sleep(2000);
     console.log("watchingReels");
     callback();
}


function chatwithFriends() {
     sleep(7000);
     console.log("chatwithFriends");
}

console.time("mymovietime");
movieDownload(() => {
    watchingReels(() => {
        chatwithFriends();
    })
});
console.timeEnd("mymovietime");
console.log("Iam watched the movie!!!");



