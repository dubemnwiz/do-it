import './styles.css';
import { createTask } from './task';
import { createProject } from './project';
import editImg from "./assets/edit.png";
import deleteImg from "./assets/delete.png";

// To FIX / ADD
// Date Formatting
// Adding LocalStorage
// Editing Project updates the actual project
// Editing Task updates the actual task
// Input validation
// Priority level color?
// Clean up code

const addProjectBtn = document.getElementById('addProjectBtn');
const addTaskBtn = document.getElementById('addTaskBtn');
const projectSection = document.querySelector('.projects');
const taskSection = document.querySelector('.currentProject');
const infoSection = document.querySelector('.currentTask');

const task1 = createTask("Create EERD", "Read description given", 'August 8th, 2025', 'High');
const task2 = createTask("Draft Schema", "Use description given", 'August 10th, 2025', 'High');
const dailyTask1 = createTask("Brush Teeth", "Start your day", 'August 8th, 2025', 'Low');
const dailyTask2 = createTask("Go to Gym", "Hit arms and shoulders", 'August 8th, 2025', 'Medium');
const daily = createProject('Daily', [dailyTask1, dailyTask2])
const databaseProject = createProject('Database Project', [task1, task2]);
const Project2 = createProject('Website Project', [task1]);
let projects = [daily, databaseProject, Project2];

const initialTasksToLoad = daily.loadToDos();
const tasks = taskSection.querySelector('.cards');
tasks.appendChild(initialTasksToLoad); 
// ************************      Project      *************************
let currentProject = 'Daily';
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
            }
        }
        taskSection.appendChild(newTasksToLoad);
        currentProject = projectName;
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
let currentTaskDate = null;

document.querySelector('.currentProject').addEventListener("click", (e) => {
    if (e.target.id === 'deleteTaskBtn') {
        const taskCard = e.target.parentElement;
        const taskTitle = taskCard.querySelector('#taskTitle').textContent;
        taskCard.remove();
        let idx = 0;
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].title === currentProject) {
                idx = i; 
            }
        };
        let taskIdx = 0;
        for (let i = 0; i < projects[idx].toDos.length; i++) {
            if (projects[idx].toDos[i].title === taskTitle) {
                taskIdx = i;
            }
        }
        projects[idx].toDos.splice(taskIdx, 1);
        taskCard.remove();
    } else if (e.target && e.target.id === 'editTaskBtn') {
        const taskCard = e.target.closest(".taskCard");
        currentTaskName = taskCard.querySelector("#taskTitle");
        currentTaskDate = taskCard.querySelector("#taskDate");
        document.getElementById("editTask").style.display = "block";
        document.getElementById("editTaskName").value = currentTaskName.textContent;
        document.getElementById("editTaskName").focus();
    } else if (e.target.className === 'taskCard' || e.target.id === 'taskTitle' || e.target.id === 'taskDate') {
        const taskCard = e.target.closest('.taskCard');
        const taskTitle = taskCard.querySelector('#taskTitle').textContent;
        console.log(taskTitle);
        let idx = 0;
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].title === currentProject) {
                idx = i; 
            }
        };
        let taskIdx = 0;
        for (let i = 0; i < projects[idx].toDos.length; i++) {
            if (projects[idx].toDos[i].title === taskTitle) {
                taskIdx = i;
            }
        }
        const task = projects[idx].toDos[taskIdx];
        const title = task.title;
        const desc = task.description;
        const date = task.dueDate;
        const priority = task.priority;
        const currTaskTitle = document.getElementById('currentTaskTitle');
        currTaskTitle.remove();
        const currTaskCard = document.querySelector('.currentTaskCard');
        currTaskCard.remove();
        
        const info = document.createElement('div');
        info.classList.add('title');
        info.id = 'currentTaskTitle';
        info.textContent = title;

        const infoTitle = document.createElement('div');
        infoTitle.classList.add('currentTaskCard');
        infoTitle.innerHTML = `<div id="taskDescription"><strong>Description:</strong> ${desc}</div>
                <div id="taskDueDate"><strong>Due:</strong> ${date}</div>
                <div id="taskPriority"><strong>Priority Level:</strong> ${priority}</div>`

        infoSection.appendChild(info);
        infoSection.appendChild(infoTitle);
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
    document.getElementById("newTask").style.display = "block";
    document.getElementById("newTaskName").value = 'Untitled Task';
    document.getElementById("newTaskName").focus();
    document.getElementById("newTaskName").select();
});

document.getElementById("saveNewTask").addEventListener("click", function () {
    const newTitle = document.getElementById("newTaskName").value.trim();
    const newDesc = document.getElementById("newDescription").value.trim();
    const newDate = document.getElementById("newDate").value.trim();
    const newPrio = document.getElementById("newPriority").value.trim();

    const newTask = createTask(newTitle, newDesc, newDate, newPrio);
    for (const project of projects) {
        if (project.title === currentProject) {
            project.toDos.push(newTask);
        }
    }
    const taskCard = document.createElement('div');
    taskCard.classList.add('taskCard');
    taskCard.innerHTML = `<input type="checkbox" id="taskCheck">
                            <div class="taskInfo">
                                <div id="taskTitle">${newTitle}</div>
                                <div id="taskDate">${newDate}</div></div>
                            <img id="editTaskBtn" src="${editImg}" height="24px" width="24px"/> 
                            <img id="deleteTaskBtn" src="${deleteImg}" height="24px" width="24px"/>`;
    const tasks = document.querySelector('.cards');
    tasks.appendChild(taskCard);
    document.getElementById("newTask").style.display = "none";
});
document.getElementById("cancelNewTask").addEventListener("click", function () {
    document.getElementById("newTask").style.display = "none";
});
document.getElementById("newTaskName").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.getElementById("saveNewTask").click();
    }
});