# SQL Employee Tracker
  ![Github License](https://img.shields.io/badge/license-MIT-yellowgreen.svg)

  ## Description

 Developed a command-line application to manage a company's employee database.

 ## The Task

 Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

 Because this Challenge will require the use of the `Inquirer` package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: `npm i inquirer@8.2.4`.

 Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

 ## User Story
 ```md
 AS A business owner
 I WANT to be able to view and manage the departments, roles, and employees in my company
 SO THAT I can organize and plan my business.
 ```

 ## Acceptance Criteria
 ```md
 GIVEN a command-line application that accepts user input


 WHEN I start the application
 THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

 WHEN I choose to view all departments
 THEN I am presented with a formatted table showing department names and department ids

 WHEN I choose to view all roles
 THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

 WHEN I choose to view all employees
 THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

 WHEN I choose to add a department
 THEN I am prompted to enter the name of the department and that department is added to the database

 WHEN I choose to add a role
 THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

 WHEN I choose to add an employee
 THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

 WHEN I choose to update an employee role
 THEN I am prompted to select an employee to update and their new role and this information is updated in the database
 ```

 ---
 ## Table Of Contents

 * [Installation](#installation)

 * [Built With](#built-with)

 * [License](#license)
 
 * [Screenshot](#screenshot)

 * [Mock-Up](#mock-up)

 * [Walkthrough](#walkthrough)

 * [Contributions](contributions)

 * [Questions](questions)

 ---

 ## Installation

 Download the application and run:

 ```
 1. Install the following: 
 - Inquirer.js: [Version 9.2.2](https://www.npmjs.com/package/inquirer/v/9.2.2)
 - MySQL2: [Version 3.3.0](https://www.npmjs.com/package/mysql2)
 - Console.table: [Version 0.10.0](https://www.npmjs.com/package/console.table)
 2. Open the integrated terminal for the document and complete the installation.

 ```

 ## Built With

 - JavaScript 
 - Inquirer.js: [Version 9.2.2](https://www.npmjs.com/package/inquirer/v/9.2.2)
 - MySQL2: [Version 3.1.2](https://www.npmjs.com/package/mysql2)
 - Console.table: [Version 0.10.0](https://www.npmjs.com/package/console.table)
 - Visual Studio Code: [Website](https://code.visualstudio.com/)


 ## License

 MIT

 ## Screenshot

 ![Schema-db](/images/Schema-db.png)

 ![Seeds-db](/images/Seeds-db.png)

 ![Terminal-Screenshot](/images/terminal-screenshot.png)

 ## Mock-Up

 ![Demo](/images/SQL%20Demo.gif)

 ## Walkthrough

 [Link](https://drive.google.com/file/d/1ytHlLAaAvwb1eWdzI2GjigSA-rSKLjT7/view?usp=share_link)


 ## Contributions

 NA

 ## Questions

 For additional questions, contact me at the email provided below:

 - GitHub: [Corzah97](https://github.com/Corzah97/)
 - Email:  corzah911@gmail.com

