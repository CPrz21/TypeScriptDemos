//? Inheritance
//* Provides a way to reuse code across class in a family hierarchy
//* Classes can inherit/derive funcionality from other class use the EXTENDS keyword
//! example
/**
 * class FatherClass {
 * }
 * 
 * class ChildClass extends FatherClass {
 * }
 */
//* Call super() in a child class constructor when the base/parent class
//* has a constructor


//? Abstraction
//* Abstract complex functionality into an object that can be used as the base for other objects
//* Why do I need an abstract class?
//* --
//* An Abstract class can be used as a foundation for other classes
//* Can define concrete members as well as abstract members
//! Example
/**
 * abstract class BankAccount {
 * //* Abstract member(must be implemented by child)
 * abstract accountType: AccountType
 * //* Concrete member
 * deposit(){...}
 * }
 */