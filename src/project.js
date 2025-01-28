export function createProject(title, description, dueDate, toDos, isComplete = false) {
    return {
        title, 
        description, 
        dueDate, 
        toDos, 
        isComplete,
        toggleComplete() {
            this.isComplete = !this.isComplete;
        },
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
