//Arrow function
let showstudentDeatails = () => {
    console.log("studentName:" + "Swapna");
    console.log("studentId:" + "4B4");
}
//showstudentDeatails();



let movieDetails = (movieName, actor) => {
    console.log("movieName:" + movieName);
    console.log("actorName:" + actor);
}
//(movieDetails("RRR", "NTR"));


// setTimeout(()=>{
//     console.log("Test");
// },5000);


setInterval(()=>{
    console.log("Test");
},5000);

