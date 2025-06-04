var fruits = [
    {
     fruit1:"Banana", 
     fruit2:"Apple", 
     fruit3:"Panasa"
    },
    {
     fruit1:"orange", 
     fruit2:"papaya", 
     fruit3:"mangoo"
    }];
for(let fruit of fruits) {
    //console.log(fruits[i]);
    if(fruit.fruit2=="papaya"){
        console.log("the fruit is "+fruit.fruit2);
    }
}




var fruits = ["Banana", "Apple", "Panasa"];
for(let fruit of fruits) {
    //if(fruit=="Panasa") {
        console.log("it is a "+fruit);
   // }

}


/*---------------------------------------------------
var students = ["Swapna", "Savitri", "prasanna"];
for(let student of students) {
    //console.log("The student name is "+student);
    if(student=="Swapna") {
        console.log(student+" is a topper of the class");
    }
}
*///---------------------------------------------------------


var students = [
    {student1:"Swapna",
     student2:"Savitri",
     student3:"prasanna"
    },
    {
     student1:"Narasimha",
     student2:"Chinna",
     student3:"vamsi"
    }];
for (let studentGroup of students) {
    for (let key in studentGroup) {
        console.log("The student name is " + studentGroup[key]);

        if (studentGroup[key] === "Swapna") {
            console.log(studentGroup[key] + " is a topper of the class");
        }
    }
}