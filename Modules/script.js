export let Name = "Swapna";


export let employeeDetails = function(callback) {
    let {employeeName, experience, salary} = callback();
    console.log(employeeName, experience, salary);
}
export let employee = function() {
    let employeeName = "Swapna";
    let experience = 2;
    let salary = 80000;
    return {employeeName, experience, salary};
}



export function studentDetails(callback) {
    let stuDetails = callback();
    console.log(stuDetails);
}
export let student = () => {
    let information = {
        stuName : "Swapna",
        Rank : "First"
    };
    return `${information.stuName} got a ${information.Rank} rank`;
}



export function movieDetails(callback) {
    let {movie, Actor} =callback();
    console.log(`movieName: ${movie} , actorName: ${Actor}`);
}
export let movie = () => {
    let mDetails = {
        movie:"RRR",
        Actor:"NTR"
    };
    return mDetails;
}
