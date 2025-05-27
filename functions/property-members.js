function numbers(num1, num2) {
    console.log("num1:", num1);
    console.log("num2:", num2);
}
numbers(100,120);
console.log(numbers.name);
console.log(numbers.length);




//prototype

function actor() {
    this.name="NTR";
    this.moviesList = ["Tempor", "Devara", "RRR"];
    this.moviesDirectors = ["Purijagannadh", "Koratalasiva", "Rajamouli"];
    console.log(this);
}

actor.prototype.getactorDetails = function() {
    console.log("My favourite actor name is NTR");
    console.log(`My favourite actor is ${this.name} and favourite movie is ${this.moviesList[2]}`);
    //return `My favourite actor is ${this.name} and favourite movie is ${this.moviesList[2]}`;
    console.log(this);
}

actor.prototype.getmovieDirectors = function() {
    console.log(this);
    return `${this.moviesList[0]}:${this.moviesDirectors[0]}, ${this.moviesList[1]}:${this.moviesDirectors[1]}, ${this.moviesList[2]}:${this.moviesDirectors[2]}`;
    
}





let favouriteActor = new actor()
favouriteActor.getactorDetails();
//console.log(favouriteActor.getactorDetails());
console.log(favouriteActor.getmovieDirectors());