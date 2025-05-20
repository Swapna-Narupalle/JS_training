//input parameters
//optional parameter
/*--------------------------------------------------------
function movieDetails(movieName, directorName, actorName1, actorName2) {
    console.log("movieName:" + movieName);
    console.log("directorName:" +directorName);
    console.log("actorName1:" + actorName1);
    actorName2 = actorName2 || "actorname is not defined";
    console.log("actorName2:" +actorName2);
}
movieDetails("RRR", "Rajamouli", "NTR");
*///------------------------------------------------------------



//Default parameter
/*----------------------------------------------------------
function movieDetails(movieName, directorName, actorName1, actorName2="actorname is not available") {
    console.log("movieName:" + movieName);
    console.log("directorName:" +directorName);
    console.log("actorName1:" + actorName1);
    console.log("actorName2:" +actorName2);
}
movieDetails("RRR", "Rajamouli", "NTR");
*///---------------------------------------------------------------



//Rest parameter
/*-----------------------------------------------------
function movieDetails(...additionalDetails) {
    console.log(additionalDetails);
    console.log("movieName:" , additionalDetails[0]);
    console.log("directorName:" , additionalDetails[1]);
    console.log("actorName1:" , additionalDetails[2]);
    console.log("actorName2:" , additionalDetails[3]);
}
movieDetails("RRR", "Rajamouli", "NTR", "Ramcharan");
*///-----------------------------------------------------


function movieDetails(movieName, ...additionalDetails) {
    console.log(additionalDetails);
    console.log("movieName:" , movieName);
    console.log("directorName:" , additionalDetails[0]);
    console.log("actorName1:" , additionalDetails[1]);
    console.log("actorName2:" , additionalDetails[2]);
}
movieDetails("RRR", "Rajamouli", "NTR", "Ramcharan");




