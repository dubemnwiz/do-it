import './styles.css';
import { createTask } from './task';
import { createProject } from './project';

console.log("Connected...");
const laundryTask = createTask('Wash clothes', 'Put white then colors', 'Tommorrow', 'Medium');
const runningTask = createTask('Go for a run', 'Run 5 miles', 'Tommorrow', 'Medium');
const homeworkTask = createTask('Do AI Homework', 'Finish Assignment 1', 'Next Week', 'Medium');

const daily = createProject('Daily', "Daily To-Dos", "None", []);
console.log(daily.toDos);
daily.addTask(laundryTask);
daily.addTask(runningTask);
daily.addTask(homeworkTask);
console.log(daily.toDos);
daily.deleteTask(laundryTask);
console.log(daily.toDos);


if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
if (process.env.NODE_ENV === 'production') {
    console.log('Looks like we are in production mode!');
}