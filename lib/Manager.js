const Employee = require("./Employee");
//needs to extend Employee constructor
class Manager extends Employee 
{
  constructor(name, id, mail, phone ) {
    super(name, id, mail);
    this.phone = phone;

  }

  //function get the manager as string
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;