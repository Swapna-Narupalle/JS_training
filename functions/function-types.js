//Named Function
function getstudentDetails() {
    let studentDetails = "";
    studentDetails = "studentName:" + "Swapna";
    console.log(studentDetails);
    return studentDetails;
}
//getstudentDetails();




//Anonymous Function
let ShowBookDetails = function() {
    let BookDetails = "";
    BookDetails = "BookName:" + "Mahabarata";
    console.log(BookDetails);
    return BookDetails;

}
//ShowBookDetails();


let ShowbookDetails = function(bookName, bookAuthor) { 
    console.log("bookName:" + bookName);
    console.log("AuthorName:" + bookAuthor);

}
//ShowbookDetails("Mahabaratha", "Vyasa");
