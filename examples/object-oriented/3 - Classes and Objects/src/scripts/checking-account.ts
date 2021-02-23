//? NOTES:
//* CONSTRUCTOR 
//* is called when a class is instantiated to create an object, 
//* can accept parameters that can be mapped to properties

//* AUTOMATIC PROPERTIES(AP)
//* Properties can be defined in a constructor using accesibility modifiers (public/private)
//* by using it (AP) a property will be generated and the contructor value will be mapped to it
//! Example
/*
Original
class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

With AP
class Person {
    constructor(public firstName: string, public lastName: string){}
}
*/

export class CheckingAccount {
    private _balance = 0; // field

    constructor(public title: string) { }

    get balance() { // get block
        return this._balance;
    }

    set balance(val: number) { // set block
        this._balance = val;
    }

    deposit(amount: number) { // function
        this.balance += amount;
    }

    withdrawal(amount: number) { // function
        this.balance -= amount;  
    }
}