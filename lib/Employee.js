
class Employee 
{
  constructor(name, id, mail ) {
    this.name = name;
    this.id = id;
    this.mail = mail;
  }
  //function to get the number
  getName(){
    return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
  }


module.exports = Employee;