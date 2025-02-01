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
    };
};
