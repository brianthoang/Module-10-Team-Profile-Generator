# Module-10-Team-Profile-Generator

This project for object-oriented programming used node.js in order to generate a team profile. Through installing package.json and package-lock.json, node.js allows users to create their team profiles through their terminal. Inquirer is used to collect the input from the user, while jest is used for running the tests.

If a user wishes to create their own team profile, they could simply type "node index.js" into their terminal and answer the questions given. The team profile fills the roles of a manager and employees(who can either be an engineer or an intern). There can only be one manager, however, there can be as many employees. Once the team profile questions are completed through the terminal, an index.js is created in the "dist" folder, that will show a webpage of the user's team profile in cards.

All profiles will show the name, role, ID, and email of the team. The unique characteristics of each role is that the manager will have an office number, the engineers will have their GitHub usernames, and the interns will have the name of their school.

A test folder is created and used with jest in order to test the Javascript application. A user can simply make sure that their code is working correctly by typing in "npm test" in their terminal. If the result of this says "pass" for all, then the code is working as designed.
