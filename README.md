Custom commands should be created inside support/command.js because this file gets loaded before any test files get evaluated. Then we need to ensure that it is imported in the e2e.js file

Syntax:  Cypress.Commands.add(name, callback()).
Let's create a login function that accepts username and password then proceed to log us in for saucedemo website