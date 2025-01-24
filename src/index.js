import './styles.css';

console.log("Connected...");

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
if (process.env.NODE_ENV === 'production') {
    console.log('Looks like we are in production mode!');
}