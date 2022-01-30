const Employee = require("./Employee");

class Enginner extends Employee 
{

  constructor(name, id, mail, github ) {
    super(name, id, mail);
    this.school = school;
  }
  //function to get the github
  getgithub() {
    return this.github;
  }
  //function get the manager as string
  getRole() {
    return "Enginner";
  }
}

module.exports = Enginner;