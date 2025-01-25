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
        updateTask() {

        },
        
        deleteTask() {
        
        },
        
        markComplete() {
        
        }
    };
};
