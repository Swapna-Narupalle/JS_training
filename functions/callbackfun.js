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


 function foodorderDetails(itemNames) {
    itemNames("Gobi" + "," + "Biryani" + "," + "Panipuri");
    

 }
 foodorderDetails(function(items) {
   console.log(items);
 });



function studentName(name) {
    name();
    //console.log(callback);
}
studentName(function() {
    let name = "Swapna";
    console.log(name);
});



function showmovieDetails(movieDetails) {
    movieDetails();
}
showmovieDetails(function() {
    let movieDetails = {
        name:"RRR",
        actor:"NTR",
        director:"Rajamouli"
    };
    console.log(movieDetails);
    
});


function showmovieDetails(movieDetails) {
   result = movieDetails();
   console.log(result);
}
showmovieDetails(function() {
    let movieDetails = {
        name:"RRR",
        actor:"NTR",
        director:"Rajamouli"
    };
    return movieDetails;
    
});