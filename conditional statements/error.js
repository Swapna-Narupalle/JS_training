//errors
/*------------------------------
let name;
try{
   name = name.length; 
}
catch(ex) {
    console.log(ex.message);
}
finally{
    console.log("task completed")
}
console.log("length of string is"+name);
*///---------------------------------------


/*----------------------------------------------
const age = null;
try{
    age = age.length;
}
catch(ex) {
    console.log(ex.message);
}
finally {
    console.log("task completed");
}
console.log("The age of person is" +age);
*///----------------------------------------------------



/*
const studentDetails = ["swapna", "madhu", "mouni"];

try {
    studentDetails = studentDetails.length;
}
catch(ex) {
    console.log(ex.message);
}
console.log("The number of students are " +studentDetails);
*/


const name = "swapna"
try{
    name = name.toUpperCase();
}
catch(ex) {
    console.log(ex.message);
}
console.log("name:" +name);










