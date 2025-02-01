import './styles.css';
import { createTask } from './task';
import { createProject } from './project';
import editImg from "./assets/edit.png";
import deleteImg from "./assets/delete.png";

const addProjectBtn = document.getElementById('addProjectBtn');
const editProjectBtns = document.querySelectorAll('#editProjectBtn');
const deleteProjectBtns = document.querySelectorAll('#deleteProjectBtn');
const addTaskBtn = document.getElementById('addTaskBtn');
const editTaskBtns = document.querySelectorAll('#editTaskBtn');
const deleteTaskBtns = document.querySelectorAll('#deleteTaskBtn');
const projectSection = document.querySelector('.projects');


addProjectBtn.addEventListener('click', (e) => {
    //implement prompt to pick the project name and push into project object factory
    const newProject = createProject('Databases');
    const div = document.createElement('div');
    div.classList.add('projectCard');
    div.innerHTML = `<div class="projectTitle">${newProject.title}</div> 
                    <img id="editProjectBtn" src="${editImg}" height="24px" width="24px"/> 
                    <img id="deleteProjectBtn" src="${deleteImg}" height="24px" width="24px"/>`;
    projectSection.appendChild(div);
    //fix the newly created elements not having event listener
});

editProjectBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target);
        console.log('clicked edit project');
        // const projCard = e.target.parentElement;
        // projCard.remove();
    });
});

deleteProjectBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target);
        console.log('clicked delete project');
        // const projCard = e.target.parentElement;
        // projCard.remove();
    });
});

addTaskBtn.addEventListener('click', (e) => {
    console.log(e.target);
    console.log('clicked add task');
    // const projCard = e.target.parentElement;
    // projCard.remove();
});

editTaskBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target);
        console.log('clicked edit task');
        // const projCard = e.target.parentElement;
        // projCard.remove();
    });
});

deleteTaskBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target);
        console.log('clicked delete task');
        // const projCard = e.target.parentElement;
        // projCard.remove();
    });
});