import './styles.css';
import { createTask } from './task';
import { createProject } from './project';
import editImg from "./assets/edit.png";
import deleteImg from "./assets/delete.png";

const addProjectBtn = document.getElementById('addProjectBtn');
const addTaskBtn = document.getElementById('addTaskBtn');
const editTaskBtns = document.querySelectorAll('#editTaskBtn');
const deleteTaskBtns = document.querySelectorAll('#deleteTaskBtn');
const projectSection = document.querySelector('.projects');

let currentTitleElement = null;

document.body.addEventListener("click", (e) => {
    if (e.target.id === 'deleteProjectBtn') {
        const projectCard = e.target.parentElement;
        projectCard.remove();
    } else if (e.target.id === 'editProjectBtn') {
        document.querySelectorAll("#editProjectBtn").forEach(button => {
            button.addEventListener("click", function () {
              const projectCard = this.closest(".projectCard");
              currentTitleElement = projectCard.querySelector(".projectTitle");
              document.getElementById("popup").style.display = "block";
              document.getElementById("name-input").value = currentTitleElement.textContent;
              document.getElementById("name-input").focus();
            });
        });
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
    currentTitleElement.textContent = newName || "Untitled Project";
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