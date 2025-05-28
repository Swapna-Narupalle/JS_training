//global context==window context
var name = "swapna";
var age = 21;
var personName =function () {
    console.log("mouni");
    return age;
}
personName();
console.log(this);




this.fooditems = ["Gobi", "panipuri","magi"];
this.itemprice = [100,20,10];
console.log(this);

//------------------------------------


//object context== object itself

var studentDetails = {
    name : "Swapna",
    Course : "BTech",
    Branch : "ECE",
    getDetails : function() {
        console.log(this);
        console.log("course:", this.Course);
        console.log("Branch:", this.Branch);
    }
};
studentDetails.getDetails();




var bookDetails = {
    bookNames : ["Ramayana", "Mahabaratha", "Bagavadgeetha"],
    bookAuthors : ["Valmiki", "Vyasa", "Krishna"],
    details : function() {
        return `${this.bookNames[0]}:${this.bookAuthors[0]} , ${this.bookNames[1]}:${this.bookAuthors[1]} , ${this.bookNames[2]}:${this.bookAuthors[2]}`;
    }


};
console.log(bookDetails.details());

//--------------------------------------------------------------

//constuctor function

function companyDetails () {
    this.employeeCount = 100;
    this.companyName = "TCS";
    console.log(this)
}
new companyDetails();






function showactorDetails(actorName,moviesList) {
console.log("actorName:", actorName);
console.log("moviesList:", moviesList);
console.log(this);
}
new showactorDetails("NTR", {movie1:"stdentno1",
                           movie2:"Tempor",
                           movie3:"RRR"
});

//------------------------------------------------------

//arrow function
var studentName = "Sindhu";
var age = 21;
var studentDetails = {
    name : "Swapna",
    Course : "BTech",
    Branch : "ECE",
    getDetails : () => {
        console.log(this);
        //console.log("course:", this.Course);
        //console.log("Branch:", this.Branch);
        console.log("studentName:", this.studentName);
        console.log("age:", this.age);
    }
};
studentDetails.getDetails();




 var bookNames = ["Ramayana", "Mahabaratha", "Bagavadgeetha"];
var bookAuthors = ["Valmiki", "Vyasa", "Krishna"];
var bookDetails = {
    librauryName : "Javaharlal_Nehru",
    //bookNames : ["Ramayana", "Mahabaratha", "Bagavadgeetha"],
    //bookAuthors : ["Valmiki", "Vyasa", "Krishna"],
    details : () => {
        return `${this.bookNames[0]}:${this.bookAuthors[0]} , ${this.bookNames[1]}:${this.bookAuthors[1]} , ${this.bookNames[2]}:${this.bookAuthors[2]}`;
        console.log(this);
    }


};
console.log(bookDetails.details());
