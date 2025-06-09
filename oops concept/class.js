//example1
/*
class studentDetails {
    constructor() {//constructor member
        let studentName = "Swapna";
        let studentRank = "First Rank";
        console.log(`%c${studentName} got ${studentRank}`,'color:green');
    }
}
new studentDetails();
*///----------------------------------------------------------




//example2
class studentDetails {
    //constructor member
    constructor() {
        let studentName = "Swapna";
        let studentRank = "First Rank";
        console.log(`%c${studentName} got ${studentRank}`,'color:green');
    }
    //method member
    getstudentsCount() { 
        let numberofStudents = 60;
        console.log(`%cThere are ${numberofStudents} students are present in the class`,'color:red');
    }

}
var showstudentDetails =new studentDetails();
showstudentDetails.getstudentsCount();
//-----------------------------------------------------------------------



//example3

class fooddelivery {
    //fieds:it can holds the value
    customer2_order = "chilly chicken";
    customer2_address = "Mydukur";
    //constructor member
    constructor(customer1_order, customer1_address) {
        console.log("first customer order recieved: ", customer1_order);
        console.log("customer1 Delivery address: ", customer1_address);

    }
    getcustomer2_Details() {
        setTimeout(()=>{ 
        console.log(`second customer order recieved: ${this.customer2_order }`);
        console.log(`customer2 Delivery address: ${this.customer2_address }`);
        },2000);
    }
}
let firstFoodorder = new fooddelivery("Biryani","Kadapa");
firstFoodorder.getcustomer2_Details();
//------------------------------------------------------------------------------



//example4
class NTR_movieDetails {
    constructor(movieName, movieDirector, releasedDate) {
           this.movie = movieName;
           this.Director = movieDirector;
           this.releasedDate = releasedDate;
    }
    getNTRmovieDetails() {
        return `NTR movie is ${this.movie} which is directed by ${this.Director} and released in ${this.releasedDate}`;
    }

}
let NTR_firstmovie = new NTR_movieDetails("studentno_1", "Rajamouli", 2000);
let NTR_secondmovie = new NTR_movieDetails("Adhurs", "v.v.vinayak", 2001);
let NTR_thirdmovie = new NTR_movieDetails("Simhadri", "Rajamouli", 2003);
console.log(NTR_firstmovie.getNTRmovieDetails());
console.log(NTR_t=NTR_secondmovie.getNTRmovieDetails());
console.log(NTR_thirdmovie.getNTRmovieDetails());


/*
 class Product{
            name;
            constructor(name,price,category)
            {
                   this.name=name;
                   this.price=price;
                   this.category=category;
            }
       
            getDetails() {
        return `${this.name} belongs to the ${this.category} category and costs ₹${this.price}`;
    }
          }
    let product1 = new Product("Laptop", 55000, "Electronics");
    let product2 = new Product("Shoes", 500, "Fashion");
     console.log(product1.getDetails());
      console.log(product2.getDetails());
    */