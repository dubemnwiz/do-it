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
        updateProject() {

        },
        deleteProject() {
        
        },
        addTask() {
        
        },
        deleteTask() {
        
        },
        markComplete() {
        
        }
    };
};
