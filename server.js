const express = require('express');
const child_process = require('child_process');
// Create a new Express web application
const app = express();
// Grab date to be used
const d = Date();
// Set handler for the index of the website
app.get('/', (req, res) => {
// Run the system `fortune` command and respond with the message
child_process.exec('fortune', (error, message) => {
if(error === null) {
res.send(d + " " + "Your Fortune is: " + message);
} else {
res.send(d + " " + 'Error: ' + error);
}
})
});
// Start web application server
app.listen(3000, () => {
console.log('Lab 2 Server is Online! :D');
});
