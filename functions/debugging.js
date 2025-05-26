//debugging techniques
let studentName = "Swapna";
//console.log("studentName:" + studentName);
document.write("studentName:" + studentName);

let statepoliticsDetails = {
    Andhrapradesh : "TDP",
    Telangana : "congress",
    Gujarath : "BJP"
};
console.log(statepoliticsDetails);
document.write(statepoliticsDetails.Andhrapradesh);

let X = 10;
let Y = 20;
sum = X + Y;
//console.log("sum:" + sum);
document.write("sum:" + sum);


function statepolyticsDetails(Andhrapradesh, Telangana, Gujarath) {
      document.write("Andhrapradesh:" + Andhrapradesh);
      document.write("Telangana:" + Telangana);
      document.write("Gujarath:" + Gujarath);
}
statepolyticsDetails("TDP", "Congress", "BJP");

function showstudentName(studentName) {
      studentName();
}

//callback
showstudentName(function() {
      console.log("studentName:" + "Swapna");
});


let vegitableDetails = function(vegitables) {
      vegitables("potato", "carrot");
}
//callback
vegitableDetails(function(X,Y) {
      console.log(X,Y);
});