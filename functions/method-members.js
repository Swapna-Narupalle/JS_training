//call by using this
var studentDetails = {
    name : "Swapna",
    Course : "BTech",
    Branch : "ECE",
    getDetails : function(book1, book2) {
        console.log(this);
        console.log("booknames:", this.bookNames[0]);
        console.log("bookAuthors:", this.bookAuthors[0]);
        console.log(book1);
        console.log(book2);
    }
};


var bookDetails = {
    bookNames : ["Ramayana", "Mahabaratha", "Bagavadgeetha"],
    bookAuthors : ["Valmiki", "Vyasa", "Krishna"],
    details : function() {
        console.log(this);
    console.log(`${this.bookNames[0]}:${this.bookAuthors[0]} , ${this.bookNames[1]}:${this.bookAuthors[1]} , ${this.bookNames[2]}:${this.bookAuthors[2]}`);
    }


};
//console.log(bookDetails.details());
//studentDetails.getDetails.call(bookDetails,"kuran", "bybil");
//studentDetails.getDetails.apply(bookDetails,["kuran", "bybil"]);
//console.log(studentDetails.getDetails.bind(bookDetails,"kuran", "bybil"));
let newbookDetails = studentDetails.getDetails.bind(bookDetails,"kuran", "bybil");
newbookDetails();