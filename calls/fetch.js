//example1
/*
var apiAddress = "https://jsonplaceholder.typicode.com/todos/1";

fetch(apiAddress).then((response)=>{
     //console.log(response);
     return response.json()
}).then((message)=>{
    console.log(message);
});
*/

/*
//example2
var apiAddres2 =  "https://jsonplaceholder.typicode.com/todos/2";
fetch(apiAddres2).then((response)=>{
    console.log(response);
    return response.json()
}).then((data)=>{
    console.log(data);
});
*/

//example3
var firstapiAddress = "https://jsonplaceholder.typicode.com/todos/1";
var secondapiAddress =  "https://jsonplaceholder.typicode.com/todos/2";
var allapiAddress = "https://jsonplaceholder.typicode.com/todos";

fetch(firstapiAddress).then((response)=>{
     //console.log(response);
     return response.json()
}).then((data)=>{
    console.log("first api details: " , data);
})

fetch(secondapiAddress).then((response)=>{
     //console.log(response);
     return response.json()
}).then((data)=>{
    console.log("secondapiDetails: " ,data);
})

fetch(allapiAddress).then((response)=>{
     //console.log(response);
     return response.json()
}).then((data)=>{
    console.log("allapiDetails: " ,data);
})


