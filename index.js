const student = require('./information')
const cowsay = require("cowsay")
console.log(cowsay.say ({
    text : `my name is ${student.firstname} my campus is ${student.campusname}`
}))


