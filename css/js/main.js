console.log('main.js');

// Assuming you have a table element with the id "myProjectsTable"
const myProjectsTable = document.getElementById('myProjectsTable');

// Assuming you have an array of project objects called "projects"
const projects = [
    { name: 'Project 1', description: 'This is project 1' },
    { name: 'Project 2', description: 'This is project 2' },
    { name: 'Project 3', description: 'This is project 3' }
];

// Loop through the projects array and create table rows for each project
projects.forEach(project => {
    const row = document.createElement('tr');

    // Create table cells for project name and description
    const nameCell = document.createElement('td');
    nameCell.textContent = project.name;
    row.appendChild(nameCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = project.description;
    row.appendChild(descriptionCell);

    // Append the row to the table
    myProjectsTable.appendChild(row);
});