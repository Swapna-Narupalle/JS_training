//example1
async function getfoodDetails() {
   return "Biryani";
}
let food = getfoodDetails();

food.then((message)=>{
    console.log("My favourite food is: ", message);
});


//example2
async function getmoviedownload_Details() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let ismovieDownload = false;
            if(ismovieDownload) {
                resolve("movie is downloaded successfully...... ");
            }
            else {
                reject("Download failed!!! due to internet problem.");
            }
        },2000);
    });
};
let movieDetails = getmoviedownload_Details();
movieDetails
       .then((result)=>{
        document.write(result);
       })
       .catch((error)=>{
        document.write(error);
       });

