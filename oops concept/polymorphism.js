//polymorphism: Polymorphism allows us to perform a single action in multiple ways
class parent {
    getpersondetails() {
        console.log("He is so humble person");
    }
}
class kid extends parent {
    getpersondetails() {
        console.log("He is also a humble person");
    }
}
let person1 = new kid();
person1.getpersondetails();
