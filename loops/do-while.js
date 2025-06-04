/*
let num = 1;

do {
    console.log("Number: " + num);
    num++;
} while (num <= 5);
*/


let fruits = ["Banana", "Apple", "Mango"];
let i = 0;

do {
    console.log("Fruit: " + fruits[i]);
    i++;
} while (i < fruits.length);




/*
var students = [
    {
        student1: "Swapna",
        student2: "Savitri",
        student3: "prasanna"
    },
    {
        student1: "Narasimha",
        student2: "Chinna",
        student3: "vamsi"
    }
];

let i = 0;
do {
    let studentGroup = students[i];
    for (let key in studentGroup) {
        console.log("The student name is " + studentGroup[key]);

        if (studentGroup[key] === "Swapna") {
            console.log(studentGroup[key] + " is a topper of the class");
        }
    }
    i++;
} while (i < students.length);
 */