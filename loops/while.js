//print numbers from 1 to 3
/*----------------------------------------------------
let i = 1;
while(i<=3) {
    console.log(i);
    i+=1;
}
*///--------------------------------------------



//print sum of first 10 numbers
/*---------------------------------------------
let i = 1;
let sum = 0;
while(i<=10) {
    sum += i;
    i=i+1;
}
console.log("sum of first 10 mumbers is: " +sum);
*///------------------------------------------



//iterate an array
/*--------------------------------
var fruits = ["Banana", "Apple", "Panasa"];
let i = 0;
while(i<=fruits.length) {
    console.log(fruits[i]);
    i+=1;
}
*///------------------------------------


/*-----------------------------------------
var fruits = ["Banana", "Apple", "Panasa"];
let i = 0;
while(i<fruits.length) {
    if(fruits[i]=="Panasa") {
        console.log("it is a "+fruits[2]);
    }
    i+=1;
}
*///--------------------------------------------


/*
var fruits = [
    {
     fruit1:"Banana", 
     fruit2:"Apple", 
     fruit3:"Panasa"
    },
    {
     fruit1:"orange", 
     fruit2:"papaya", 
     fruit3:"mangoo"
    }];
let i = 0;
while(i<fruits.length) {
    //console.log(fruits[i]);
    if(fruits[i].fruit2=="papaya"){
        console.log("the fruit is "+fruits[i].fruit2);
    }
    i+=1;
}
*/