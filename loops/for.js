//print numbers from 1 to 5
for(var i=1 ; i<=5 ; i=i+1){
    console.log(i);
}



//print even numbers from 1 to 20
for(var i=2 ; i<=20 ; i=i+1){
    if(i%2==0) {
        console.log(i);
    }
}
      
         // (or)

for(var i=2 ; i<=20 ; i+=2) {
    console.log(i);
}



/*------------------------
var fruits = ["Banana", "Apple", "Panasa"];
for(let i=0 ; i<=4 ; i+=1) {
    console.log(fruits[i]);
}
*///-------------------------------



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
for(let i=0 ; i<fruits.length ; i+=1) {
    //console.log(fruits[i]);
    if(fruits[i].fruit2=="papaya"){
        console.log("the fruit is "+fruits[i].fruit2);
    }
}




