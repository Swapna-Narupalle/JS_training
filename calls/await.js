function delaygetRRRmovie() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("RRR movie was released in 2022...");
        },3000);
    });
};


function delaygetDevaramovie() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Devara movie was released in 2024...");
        },3000);
    });
};



async function getmovieDetails() {
    console.log("Temper movie was released in 2016...");
    console.log("Janatha_Garage movie was released in 2018...");
    // await delaygetmovieName().then((result)=>{
    //     console.log(result);
    // });
    console.time("startTime");
    let RRRmovieDetails = await delaygetRRRmovie();
    console.log(RRRmovieDetails);
    let DevaramovieDetails= await delaygetDevaramovie();
    console.log(DevaramovieDetails);
    console.timeEnd("startTime");
    console.log("%cAll movies are released successfully", 'color:green');
    return "Iam watched all the movies";

}
getmovieDetails().then((message)=>{
    console.log(message);
});