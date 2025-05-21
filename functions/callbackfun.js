//callback functions
//Real time scenario
function showmovieDetails(movieName) {
    movieName();
}
//showmovieDetails("Devara");

showmovieDetails(function(){
    console.log("RRR");
});







function PrintMessage(fnParam){
    //console.log(param1);
    fnParam("Hello world");
}


//Real time scenario
//callback function
 PrintMessage(function(p1){
     console.log(p1);
 })

