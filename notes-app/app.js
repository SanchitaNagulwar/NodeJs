// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'Hello, ')   //This line creates a file notes.txt and writes a text Hello

// fs.appendFileSync('notes.txt', 'This is Mary');   // This line adds the content to the file notes.txt

// const add = require('./utils.js')

// const sum = add(5, 3) 

// console.log(sum)

const chalk = require('chalk')

// const validator = require('validator')

const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

// console.log(validator.isEmail('Mary@gmail.com'))

const greenMsg = chalk.bold.inverse.red('Important')
console.log(greenMsg)
