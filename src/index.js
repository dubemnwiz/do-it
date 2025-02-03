import './styles.css';
import { createTask } from './task';
import { createProject } from './project';
import editImg from "./assets/edit.png";
import deleteImg from "./assets/delete.png";

const addProjectBtn = document.getElementById('addProjectBtn');
const addTaskBtn = document.getElementById('addTaskBtn');
const projectSection = document.querySelector('.projects');
const taskSection = document.querySelector('.currentProject');

const task1 = createTask("Database 1", "Desc", 'August 8th, 2025', 'High');
const task2 = createTask("Not a Database 2", "Desc", 'August 8th, 2025', 'High');
const dailyTask1 = createTask("Brush Teeth", "Desc", 'August 8th, 2025', 'High');
const dailyTask2 = createTask("Go to Gym", "Desc", 'August 8th, 2025', 'High');
const daily = createProject('Daily', [dailyTask1, dailyTask2])
const databaseProject = createProject('Database Project', [task1, task2]);
const Project2 = createProject('Website Project', [task1]);
let projects = [daily, databaseProject, Project2];
 
// ************************      Project      *************************

let currentProjectTitle = null;

document.querySelector('.sidebar').addEventListener("click", (e) => {
    if (e.target.id === 'deleteProjectBtn') {
        const projectCard = e.target.parentElement;
        const projectName = projectCard.querySelector(".projectTitle").textContent;
        let idx = 0;
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].title === projectName) {
                idx = i; 
            }
        };
        projects.splice(idx, 1); 
        projectCard.remove();
    } else if (e.target && e.target.id === 'editProjectBtn') {
        const projectCard = e.target.closest(".projectCard");
        currentProjectTitle = projectCard.querySelector(".projectTitle");
        document.getElementById("popup").style.display = "block";
        document.getElementById("name-input").value = currentProjectTitle.textContent;
        document.getElementById("name-input").focus();
    } else if (e.target.className === 'projectCard' || e.target.className === 'projectTitle') {
        let projectName = '';
        if (e.target.className === 'projectCard') {
            projectName = e.target.querySelector(".projectTitle").textContent;
        } else {
            projectName = e.target.textContent;
        }
        const currentCard = document.querySelector('.cards');
        currentCard.remove();
        let newTasksToLoad = null;
        for (const project of projects) {
            if (project.title === projectName) {
                newTasksToLoad = project.loadToDos();
                console.log(newTasksToLoad);
            }
        }
        taskSection.appendChild(newTasksToLoad);
    }
});

addProjectBtn.addEventListener('click', (e) => {
    document.getElementById("newProj").style.display = "block";
    document.getElementById("projInput").value = 'Untitled Project';
    document.getElementById("projInput").focus();
    document.getElementById("projInput").select();
});

document.getElementById("saveProj").addEventListener("click", function () {
    const newTitle = document.getElementById("projInput").value.trim();
    const newProject = createProject(newTitle,[]);
    projects.push(newProject);
    const div = document.createElement('div');
    div.classList.add('projectCard');
    div.innerHTML = `<div class="projectTitle">${newProject.title}</div> 
                <img id="editProjectBtn" src="${editImg}" height="24px" width="24px"/> 
                <img id="deleteProjectBtn" src="${deleteImg}" height="24px" width="24px"/>`;
    projectSection.appendChild(div);
    document.getElementById("newProj").style.display = "none";
    console.log(projects);
});
document.getElementById("cancelProj").addEventListener("click", function () {
    document.getElementById("newProj").style.display = "none";
});
document.getElementById("projInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.getElementById("saveProj").click();
    }
});

document.getElementById("save-btn").addEventListener("click", function () {
    const newName = document.getElementById("name-input").value.trim();
    currentProjectTitle.textContent = newName || "Untitled Project";
    document.getElementById("popup").style.display = "none";
});
  
document.getElementById("cancel-btn").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});
  
document.getElementById("name-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.getElementById("save-btn").click();
    }
});

// ****************************************************************************

let currentTaskName = null;
let currentTaskDescription = null;
let currentTaskPriority = null;
let currentTaskDate = null;

document.querySelector('.currentProject').addEventListener("click", (e) => {
    if (e.target.id === 'deleteTaskBtn') {
        const taskCard = e.target.parentElement;
        taskCard.remove();
    } else if (e.target && e.target.id === 'editTaskBtn') {
        const taskCard = e.target.closest(".taskCard");
        currentTaskName = taskCard.querySelector("#taskTitle");
        currentTaskDate = taskCard.querySelector("#taskDate");
        document.getElementById("editTask").style.display = "block";
        document.getElementById("editTaskName").value = currentTaskName.textContent;
        document.getElementById("editTaskName").focus();
    } else if ('projectCard' in e.target.classList) {
        console.log('project clicked');
    }
});

document.getElementById("saveEditTask").addEventListener("click", function () {
    const newName = document.getElementById("editTaskName").value.trim();
    currentTaskName.textContent = newName || "Untitled Project";
    document.getElementById("editTask").style.display = "none";
});
  
document.getElementById("cancelEditTask").addEventListener("click", function () {
    document.getElementById("editTask").style.display = "none";
});
  
document.getElementById("editTaskName").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.getElementById("saveEditTask").click();
    }
});


addTaskBtn.addEventListener('click', (e) => {
    console.log(e.target);
    console.log('clicked add task');
    // const projCard = e.target.parentElement;
    // projCard.remove();
});