const myPromise = new Promise((resolve, reject) => {
    let success = true; // Set to false to simulate failure

    if (success) {
        resolve("Successfully completed...");
    } else {
        reject("Something went wrong, try again!");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

function getMyFirstPromise() {
    return new Promise((resolve, reject) => {
        let success = false; // Change to true to test success

        if (success) {
            resolve("Successfully completed...");
        } else {
            reject("Something went wrong, try again!");
        }
    });
}

getMyFirstPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
let makeCoffee = new Promise((resolve, reject) => {
    let coffeeReady = true; // Change to false to simulate failure

    setTimeout(() => {
        if (coffeeReady) {
            resolve("Coffee is ready ☕");
        } else {
            reject("Failed to make coffee.");
        }
    }, 4000); // Simulate async delay
});

makeCoffee
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

//Example2
let orderFood = new Promise((resolve, reject) => {
    let foodAvailable = true; // Change to false to simulate failure

    setTimeout(() => {
        if (foodAvailable) {
            resolve("Your food is ready 🍔");
        } else {
            reject("Sorry, food is unavailable!");
        }
    }, 3000);
});

orderFood
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

let bookCab = new Promise((resolve, reject) => {
    let driverFound = false; // Change to true to simulate success

    setTimeout(() => {
        if (driverFound) {
            resolve("Cab booked successfully 🚗");
        } else {
            reject("No drivers available at the moment.");
        }
    }, 2000);
});

bookCab
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

let downloadMovie = new Promise((resolve, reject) => {
    let internetSpeedFast = true;

    setTimeout(() => {
        if (internetSpeedFast) {
            resolve("Movie downloaded successfully 🎥");
        } else {
            reject("Download failed due to slow internet.");
        }
    }, 5000);
});

downloadMovie
    .then((msg) => console.log(msg))
    .catch((err) => console.error(err));


Promise.all([orderFood, bookCab, downloadMovie])
    .then((messages) => {
        console.log("All tasks completed:");
        messages.forEach((msg) => console.log(msg));
    })
    .catch((error) => {
        console.error("One of the promises failed:", error);
    });
