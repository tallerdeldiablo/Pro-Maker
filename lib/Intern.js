const Employee = require("./Employee");

// The Team constructor is responsible for keeping score and controlling the flow of the overall game

class Intern extends Employee 
{
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor(name, id, mail, school ) {
    super(name, id, mail);
    this.school = school;
  }
  //function to get the school
  getschool() {
    return this.school;
  }
  //function get the manager as string
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;