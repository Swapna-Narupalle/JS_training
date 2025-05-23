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