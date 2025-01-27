export function createTask(title, description, dueDate, priority, isComplete = false) {
    return {
        title, 
        description, 
        dueDate, 
        priority, 
        isComplete,
        toggleComplete() {
            this.isComplete = !this.isComplete;
        },
        updateTask(newTitle, newDescription, newDueDate, newPriority) {
            this.title = newTitle;
            this.desc = newDescription;
            this.dueDate = newDueDate;
            this.priority = newPriority;
        },
    };
};
