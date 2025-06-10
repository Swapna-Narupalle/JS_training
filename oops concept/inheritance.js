//inheritance: it is the mechanism in which one class aquires the property of another class.
class parent {
    getFatherdetails() {
        console.log("He is so humble person");
    }
}
class kid extends parent {
    getkiddetails() {
        console.log("He is also a humble person");
    }
}
let person1 = new kid();
person1.getFatherdetails();
person1.getkiddetails();
