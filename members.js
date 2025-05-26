//members of complex data types
//1.members of object data type
var studentDetails = {
   name : "Swapna",
   course : "Btech",
   Branch : "ECE",
   subjectMarks : function(English, Maths, Chemistry) {
      console.log("English:" + English);
      console.log("Maths:" + Maths);
      console.log("Chemistry:" + Chemistry);
   }
};
console.log(studentDetails.name);
console.log(studentDetails.course);
console.log(studentDetails.Branch);
studentDetails.subjectMarks(95,100,98);


//------------------------------------------------------------

var actorDetails = {
   name : "NTR",
   firstMovie : "Balaramayana",
   moviesList : function(movies) {
                let result = movies();
                return result;
   }
};
console.log(actorDetails.name);
console.log(actorDetails.firstMovie);
actorDetails.moviesList(function() {
   let movies = ["Tempor", "Rabasa", "Devara"];
   console.log(movies);
});

//-----------------------------------------------------------------


 