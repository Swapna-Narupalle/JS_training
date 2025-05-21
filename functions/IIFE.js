//IIFE (Immediately Invoked Function Expression) 
(function() {
    let bookName ="bookName:" + "Ramayana";
    let bookAuthor = "AuthorName:" + "Valmiki";
    console.log(bookName);
    console.log(bookAuthor);
})();



(function(bookName, authorName) {
    console.log(bookName);
    console.log(authorName);
})("Ramayana", "Valmiki");


