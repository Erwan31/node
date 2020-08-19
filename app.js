/*
const os = require('os');
const fs = require('fs');

let user = os.platform();
let date = new Date();

let message = `User platform "${user}" on ${date} WRITE`;

fs.appendFile("hello.txt", message, function(err){
    if(err){
        console.log('not able to append');
    }
})
*/

const fs = require('fs');

const userData = require('./user.js');

console.log(userData);

const data = fs.readFile('./hello.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});


function showMessage() {
    console.log('Finish');
}

showMessage();