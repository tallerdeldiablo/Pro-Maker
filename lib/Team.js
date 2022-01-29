const inquirer = require("inquirer");
const chalk = require("chalk");
const Word = require("./Word");
const Employee = require("./Employee");
const words = require("./words");

// The Team constructor is responsible for keeping score and controlling the flow of the overall game

class Team {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor() {
    this.guessesLeft = 0;

    console.log(this)
  }
  // Sets the guesses to 10 and gets the next word
  play() {
    this.guessesLeft = 10;
    this.nextWord();
  }

  // Creates a new Word object using a random word from the array, asks the user for their guess
  nextWord() {
    console.log("next word")
        this.makeGuess();
  }

  // Uses inquirer to prompt the user for their guess
  makeGuess() {
    this.askForLetter().then(() => {
      // If the user has no guesses remaining after this guess, show them the word, ask if they want to play again
      if (this.guessesLeft < 1) {
        console.log(
          'No guesses left! Word was: "' +
            this.currentWord.getSolution() +
            '"\n'
        );
        this.askToPlayAgain();

        // If the user guessed all letters of the current word correctly, reset guessesLeft to 10 and get the next word
      }    
      else {
        this.makeGuess();
      }
    });
  }

  // Asks the user if they want to play again after running out of guessesLeft
  askToPlayAgain() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Inset a manager  Again?"
        }
      ])
      .then(val => {
        // If the user says yes to another game, play again, otherwise quit the game
        if (val.choice) {
          this.play();
        } else {
          this.quit();
        }

      });
  }

  // Prompts the user for a letter
  askForLetter() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "choice",
          message: "What is the manager's name",
          // The users guess must be a number or letter
          validate: val => /[a-z1-9]/gi.test(val),          
        },
          {
          type: "input",
          name: "choice",
          message: "What is the name id",
          // The users guess must be a number or letter
          validate: val => /[a-z1-9]/gi.test(val),          
        },
        {
        type: "input",
        name: "choice",
        message: "What is the name email",
        // The users guess must be a number or letter
        validate: val => /[a-z1-9]/gi.test(val),          
      },
      {
      type: "input",
      name: "choice",
      message: "What is tname Manager",
      // The users guess must be a number or letter
      validate: val => /[a-z1-9]/gi.test(val),          
    }
      ])
      .then(val => {
        // If the user's guess is in the current word, log that they chose correctly

        const manager = val.choice;
        console.log(chalk.green("\ninsert!!!\n"));
/**----------------------- */
        // const didGuessCorrectly = this.currentWord.guessLetter(val.choice);
        // if (didGuessCorrectly) {
        //   console.log(chalk.green("\nCORRECT!!!\n"));

        //   // Otherwise decrement `guessesLeft`, and let the user know how many guesses they have left
        // } else {
        //   this.guessesLeft--;
        //   console.log(chalk.red("\nINCORRECT!!!\n"));
        //   console.log(this.guessesLeft + " guesses remaining!!!\n");
        // }

        /***----------- */

        console.log("\n "+manager);
      });
  }

  // Logs goodbye and exits the node app
  quit() {
    console.log("\nGoodbye!");
    process.exit(0);
  }
}

module.exports = Team;