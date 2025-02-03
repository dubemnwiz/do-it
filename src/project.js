import editImg from "./assets/edit.png";
import deleteImg from "./assets/delete.png";

export function createProject(title = 'Untitled Project', toDos) {
    return {
        title, 
        toDos,
        updateProject(newTitle, newDescription, newDueDate, newPriority) {
            this.title = newTitle;
            this.desc = newDescription;
            this.dueDate = newDueDate;
            this.priority = newPriority;
        },
        addTask(task) {
            toDos.push(task)
        },
        deleteTask(task) {
            const taskIndex = toDos.indexOf(task.name);
            toDos.splice(taskIndex, 1);
        },
        loadToDos() {
            const newCards = document.createElement('div');
            newCards.classList.add('cards');
            for (const toDo of this.toDos) {
                const taskCard = document.createElement('div');
                taskCard.classList.add('taskCard');
                taskCard.innerHTML = `<input type="checkbox" id="taskCheck">
                                        <div class="taskInfo">
                                            <div id="taskTitle">${toDo.title}</div>
                                            <div id="taskDate">${toDo.dueDate}</div></div>
                                        <img id="editTaskBtn" src="${editImg}" height="24px" width="24px"/> 
                                        <img id="deleteTaskBtn" src="${deleteImg}" height="24px" width="24px"/>`;
                newCards.appendChild(taskCard);
            }
            return newCards;
        }
    };
};
