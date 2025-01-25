import './styles.css';
import { createTask } from './task';

console.log("Connected...");
const laundryTask = createTask('Wash clothes', 'Put white then colors', 'Tommorrow', 'Medium');
console.log(`Name: ${laundryTask.title}`);
console.log(`Description: ${laundryTask.description}`);
console.log(`Due Date: ${laundryTask.dueDate}`);
console.log(`Priotiy: ${laundryTask.priority}`);

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
if (process.env.NODE_ENV === 'production') {
    console.log('Looks like we are in production mode!');
}