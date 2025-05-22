//Global and local variables
/*--------------------------------------------------
var Name ="Swapna";
var sirName = "Narupalle";
{ 
  let Id = "4B4";
  console.log(Id);//local
  console.log("studentName:" + Name + " " + sirName);//global
}
//console.log(Id);// Reference error
console.log(Name + " " + sirName);//global
*///------------------------------------------------------



//global and local variables with anonymous functions
/*----------------------------------
var studentDetails = {
    studentName : "Swapna",
    studentId : "4B4",
    course : "BTech"
  }
 var showstudentDetails = (function() {
     let studentName = studentDetails.studentName;
     let studentId = studentDetails.studentId;
     console.log("studentName:" + studentName);
     console.log("studentId:" + studentId);
})();
*///------------------------------------------------


/*-----------------------------------------
var movieDetails = ["RRR", "Devara", "Rabasa"];

showmovieDetails = function() {
  let movieNames = movieDetails;
  console.log(movieNames);//local
}
//console.log(movieNames);//referece error
console.log(movieDetails);//global
showmovieDetails();
*///----------------------------------------------------


var centralParties = {
  partieName1 : "BJP",
  partieName2 : "Congress"
}
function state1() {
  let state1partyName = "TDP";
  console.log("state1Party:" + state1partyName);
  console.log(centralParties);
}
function state2() {
  var state2partyName = "TRS";
  console.log("state2Party:" + state2partyName);
  console.log(centralParties);
}
state1();
state2();
//console.log("state1Party:" + state1partyName);//reference error
//console.log("state2Party:" + state2partyName);//Reference error
  console.log(centralParties);
