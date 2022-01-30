// const Team = require("./Team");

const Employee = require("./Employee");

// The Team constructor is responsible for keeping score and controlling the flow of the overall game

class Manager extends Employee 
{
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor(name, id, mail, phone ) {
    super(name, id, mail);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.phone;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;