//asynchronous calls by using callback functions

function movieDownload() {
    setTimeout(() => {
        console.log("movieDownload");
    },5000);
}

function watchingReels() {
    setTimeout(() => {
        console.log("watchingReels");
    },2000);
}


function chatwithFriends() {
    setTimeout(() => {
         console.log("chatwithFriends");
    },7000);
}
movieDownload();
watchingReels();
chatwithFriends();

7