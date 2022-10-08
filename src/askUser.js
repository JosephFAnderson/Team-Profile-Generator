const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const generateHTML = require('./generateHTML');
const inquirer = require('inquirer');
const teamArray = [];

function getManager(){
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the team manager's name?",
                validate: (ans) => {
                    if (ans === ""){
                        return 'Please provide a name.'
                    }

                    return true;
                }
            }, {
                name: "id",
                type: "input",
                message: "What is the team manager's employee id?",
                validate: (ans) => {
                    if (ans === ""){
                        return 'Please provide an employee id.'
                    }

                    return true;
                }
            }, {
                name: "email",
                type: "input",
                message: "What is the team manager's email?",
                validate: (ans) => {
                    if (ans === ""){
                        return 'Please provide an email address.'                        
                    }
                    return true;
                }
            }, {
                name: "officeNumber",
                type: "input",
                message: "What is the team manager's office number? (Just provide the number)",
                validate: (ans) => {
                    if(isNaN(ans)){
                        return "please enter only numbers";                        
                    }
                    return true;                   
                }
            }, {
                name: "more",
                type: "list",
                message: "Would you like to add anyone else to the team?",
                choices: ['Engineer', 'Intern', 'That is all']
            }
        ])
        .then(ans => {
            teamArray.push(new Manager(ans.name.trim(), ans.id.trim(), ans.email.trim(), ans.officeNumber.trim()));
            console.log(teamArray);
            
            switch(ans.more){
                case 'Engineer':
                    console.log('Add an Engineer!');
                    break;
                case 'Intern':
                    console.log('Add an Intern!');
                    break;
                case 'That is all':
                    console.log('Make my webpage!');
                    break;
            }
        })
}