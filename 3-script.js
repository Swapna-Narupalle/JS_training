//Non Primitive Data Types
//1.Array data type--------------------------------------
//let ids = [1,2,3,4,5];// Array
//console.log(ids);

/*let authornames = ["John", "Swapna", "Ravi"];// Array
console.log(authornames);
console.log(authornames[2]);
*/

/*
let mbooks = ["kranthi", "minnu", "sree", 1,true, null, [1, 2, 3]];
 console.log(mbooks);
 console.log(mbooks[6][1]);
*/

 
/*
    let studentnames =["Swapna", "Sindhu", "Sandya"];
    console.log(studentnames[0]);
    let studentmarks = [100,90,80];
    console.log(studentmarks[0]);
    console.log(`${studentnames[0]} scored ${studentmarks[0]} marks`);
*/

/*
 let employeedetails=["swapna",
                      "Sindhu",
                      "Sandya",
                      "Manisha",
                      ["emp123","emp567","emp238","emp986"],
                      {
                        empSalary: 50000,
                        emprole:"SoftwareEngineer"
                      },
                     "Sreeja"];
console.log(employeedetails[10].emprole);
*/


/*
let student_Details = [{
    name: "Swapna",
    age: 21,
    Course: "Btech"
},
{
    name: "Sindhu",
    age: 22,
    Course: "Btech"

},
{   
    name: "Madhu",
    age: 21,
    Course: "Btech"}];
console.log(student_Details);
console.log(student_Details[0].name);
console.log(student_Details[1].age);
console.log(`${student_Details[0].name} age is ${student_Details[0].age} and course is ${student_Details[0].Course}`);
*/








//2.Objects--------------------------------------
/*
let employeeDetails = {
    name: "Swapna",
    age: 21,
    Programes : ["Python", "Javascript", "dotnet"],
    Location : {
        State: "TS",
        Distrct: "Hyderabad"
    },
}
console.log(employeeDetails.Location.State);
console.log(employeeDetails.Programes[0]);
*/

/*
let student_Details = {Persion1 : {
    name: "Swapna",
    age: 21,
    Course: "Btech"
},
Persion2 : {
    name: "Sindhu",
    age: 22,
    Course: "Btech"

},
Persion3 : {   
    name: "Madhu",
    age: 21,
    Course: "Btech"
}
};
console.log(student_Details);
console.log(student_Details.Persion1.name);
console.log(student_Details.Persion2.age);
console.log(student_Details.Persion3.Course);
*/



let book_Details = {bookNames: ["Mahabaratha", "Ramayana", "Bhagavad Gita"],
                    bookAuthors: ["Vyasa", "Valmiki", "Krishna"],
                    bookPrice: [500, 600, 700]};
console.log(book_Details);
console.log(book_Details.bookAuthors[1]);
console.log(book_Details.bookPrice[2]);





