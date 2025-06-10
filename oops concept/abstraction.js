//abstarction: The main purpose of abstraction is hiding the 
// unnecessery details ffrom the users.

class ATM {
    constructor(balance, withdraw) {
           this.balance = balance;
           this.withdraw = withdraw;
    }
    getAmount() {
        let min_balance = 1000;
        if((this.balance-this.withdraw)>=min_balance) {
            console.log("withdraw successful");
        }
        else {
            console.log("withdraw failed");
        }
    }
}
const mybank = new ATM(2000, 1500);
mybank.getAmount();