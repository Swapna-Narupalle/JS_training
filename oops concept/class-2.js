//example1
/*
class movie {
    mName = "RRR";
    get movieName() {
        return this.mName;
    }
    set movieName(value) {
        if(typeof value=="string") {
            this.mName=value;
        }
        else {
            console.log("please enter the string value......");
        }
    }
}
let myfavouriteMovie = new movie();
myfavouriteMovie.movieName=1;
console.log(myfavouriteMovie.movieName);
//myfavouriteMovie.movieName=1;
*///----------------------------------------------------------------



//example2
/*
class movie {
    mName;
    get movieName() {
        return this.mName;
    }
    set movieName(value) {
        if(typeof value=="string") {
            this.mName=value;
        }
        else {
           console.log("please enter the string value......");
        }
    }
}
let myfavouriteMovie = new movie();
//console.log(myfavouriteMovie.movieName);
myfavouriteMovie.movieName=1;
myfavouriteMovie.movieName;
//myfavouriteMovie.movieName=1;
*///----------------------------------------------------------------------------

//example3
class movie {
    mName;
    constructor(movie) {
         this.mName = movie;
    }
    get movieName() {
        return this.mName;
    }
    set movieName(value) {
        if(typeof value=="string") {
            this.mName=value;
            console.log(this.mName);
        }
        else {
           console.log("please enter the string value......");
        }
    }
}
let myfavouriteMovie = new movie("RRR");
console.log(myfavouriteMovie.movieName);
//console.log(myfavouriteMovie.movieName);
myfavouriteMovie.movieName="Devara";
myfavouriteMovie.movieName;