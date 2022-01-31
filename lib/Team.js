const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require('fs');
const generateHTML = require('./generatefile');
const Enginner = require("./Enginner");
const Intern = require("./Intern");
const Manager = require("./Manager");

var teamData = []

class Team {
  constructor() {
     this.guessesLeft = 0;
  }
  // Sets the guesses to 10 and gets the next word
  play() {
    this.guessesLeft = 10;
    this.mana = []
    this.nextQuestion();
  }

  // Creates a new Word object using a random word from the array, asks the user for their guess
  nextQuestion() {
    console.log("Please Build your Team")
  
        this.askForManager();
  }

  // Uses inquirer to prompt the user for their guess


  // Asks the user if they want to play again after running out of guessesLeft
  askToPlayAgain() {
    inquirer
    .prompt(
        {
            type: 'list',
            name: 'role',
            message: 'Which type of team member would you like to add?',
            choices: [
                'Engineer',
                'Intern',
               "I don't want to add team member",
            ]
        },
    )
 .then(val => {
        // If the user says yes to another game, play again, otherwise quit the game
        if (val.role === 'Engineer' ) {
          this.askForEngineer();
        } else   if (val.role === 'Intern' ) {
          this.askForManager();
        }
        else{
          this.quit();
        }

      });
  }

  // Prompts the user for Manger
  askForManager() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the manager's name"
             
        },
          {
          type: "input",
          name: "id",
          message: "What is the name id"
        
             
        },
        {
        type: "input",
        name: "mail",
        message: "What is the name email"
   
          
      },
      {
      type: "input",
      name: "phone",
      message: "What is the Manager's phone"
      
    }
      ])
      .then(data => {
        // If the user's guess is in the current word, log that they chose correctly

        // const manager = data;
        const manager = new Manager(data.name, data.id, data.mail, data.phone);

        console.log(chalk.green("\name!!!\n" + manager.name));
        console.log(chalk.green("\nmail!!!\n" + manager.mail));
        console.log(chalk.green("\nohone!!!\n" + manager.phone));
/**----------------------- */

        /***----------- */
        this.mana= data;
        console.log("\n "+manager);
        this.askToPlayAgain();
     
      });
  }
//questions for Enginers only
  askForEngineer() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your engineer's name"
             
        },
          {
          type: "input",
          name: "id",
          message: "What is your engineer's id"
        
             
        },
        {
        type: "input",
        name: "mail",
        message: "What is your engineer's email"
   
          
      },
      {
      type: "input",
      name: "github",
      message: "What is your engineer's Github username"
      
    }
      ])
      .then(data => {
        // If the user's guess is in the current word, log that they chose correctly

        // const manager = data;
        const engineer = new Enginner(data.name, data.id, data.mail, data.github);

        console.log(chalk.green("\n En ame!!\n" + engineer.name));
        console.log(chalk.green("\n Enid!!\n" + engineer.id));
        console.log(chalk.green("\n E email!!\n" + engineer.mail));
        console.log(chalk.green("\n E git!\n" + engineer.phone));


    //  console.log(this)
     this.askToPlayAgain();
     
      });
  }
  //questions for Enginers only
  askForIntern() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your intern's name"
             
        },
          {
          type: "input",
          name: "id",
          message: "What is your intern's id"
        
             
        },
        {
        type: "input",
        name: "mail",
        message: "What is your intern's email"
   
          
      },
      {
      type: "input",
      name: "school",
      message: "What is your intern's Github school"
      
    }
      ])
      .then(data => {
        // If the user's guess is in the current word, log that they chose correctly

        // const manager = data;
        const intern = new Intern(data.name, data.id, data.mail, data.school);

    this.askToPlayAgain();
/**----------------------- */
    
      });
  }

  // Logs goodbye and exits the node app
  quit() {
    var array = ['ss']
    const htmlPageContent = generateHTML(array);
    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
    console.log("\nGoodbye!");
    process.exit(0);
  }
}

module.exports = Team;