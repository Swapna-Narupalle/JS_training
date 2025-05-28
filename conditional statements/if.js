//conditional statements(if, if else, else)
let isschoolStudent = true;
let iscollegeStudent =false;
if(isschoolStudent) {
    console.log(`He is a school student`);
}
else if(iscollegeStudent) {
    console.log(`He is a college student`);
}
else {
    console.log(`He is a BTech student`);
}




let studentDetails = {
    studentNames:["Swapna", "Madhu", "Sindhu", "Mouni"],
    studentMarks:["100", "99", "95", "100"]
}

if(studentDetails.studentMarks[0]==studentDetails.studentMarks[2]) {
    console.log(`${studentDetails.studentNames[0]} and ${studentDetails.studentNames[2]} got the same marks`);
}
else {
    console.log(`${studentDetails.studentNames[0]} and ${studentDetails.studentNames[2]} marks are not same`);
}




let a=10;
let b=3;
if(a%b==0) {
    console.log(`a is a even number`);
}
else {
    console.log(`a is a odd number`);
}



function checkstudentType(isschoolStudent, iscollegeStudent) {
    if(isschoolStudent) {
        console.log(`He is a school student`);
    }
    else if(iscollegeStudent) {
        console.log(`He is a college student`);
    }
    else {
        console.log(`He is a BTech student`);
    }
}
checkstudentType(true, false);//he is a school student
checkstudentType(false, true);//He is a college student
checkstudentType(false, false);//He is a BTech student




/*
function votersEligibility(person1age,person2age) {
    if(person1age>=18) {
        console.log(`person1 is eligible for voting`);
    }
    else if(person2age>=18) {
        console.log(`person2 is eligible for voting `);
    }
    else {
        console.log(`person1 and person2 are not eligible for voting`);
    }
}
votersEligibility(13,19);

*/


function votersEligibility(callback) {
    let {person1age, person2age}=callback();
    if(person1age>=18) {
        console.log(`person1 is eligible for voting`);
    }
    else if(person2age>=18) {
        console.log(`person2 is eligible for voting `);
    }
    else {
        console.log(`person1 and person2 are not eligible for voting`);
    }
}
votersEligibility(() => {
   let person1age = 13;
   let person2age = 12;
   console.log(person1age,person2age);
   
   return {person1age,person2age};
});
