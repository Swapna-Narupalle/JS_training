//encapsulation: It is the mechanism of bundling the data variables and methos together & hide them from the other classes.
class employee {
    constructor(Name, Experience, salary) {
        this.employeeName = Name;
        this.Experience =  Experience;
        this.salary = salary;
    }
    getemployeeName() {
        console.log("employeeName: ", this.employeeName);
    }
    getemployeeExperience() {
        console.log("Experience: ", this.Experience);
    }
    getemployeesalary() {
        console.log("Salary: ", this.salary);
    }
}
let softwareEmployee = new employee("Sandya", 2, 60000);
softwareEmployee.getemployeeName();
softwareEmployee.getemployeeExperience();
softwareEmployee.getemployeesalary();