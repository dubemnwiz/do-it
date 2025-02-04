import {format} from 'date-fns';

export function createTask(title, description, dueDate, priority, isComplete = false) {
    // const date = new Date(dueDate);
    // const formattedDate = format(date, 'MMMM do, yyyy');
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
