const Employee = require("./Employee");

// The Team constructor is responsible for keeping score and controlling the flow of the overall game

class Intern extends Employee 
{
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor(name, id, mail, phone ) {
    super(name, id, mail);
    this.phone = phone;
  }
  //function to get the number
  getphone() {
    return this.phone;
  }
  //function get the manager as string
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;