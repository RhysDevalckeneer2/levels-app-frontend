// index.js
'use strict';

console.log('Index.js loaded!');

window.onload = function() {

    let users = [];

    document.getElementById('signup-form').addEventListener('submit', event => {
        event.preventDefault()
        console.log('Submit clicked!')

        const user = {
            username: this.name,
            fullname: this.fullname,
            email: this.email,
            course: this.course
        };

        user.username = document.getElementById('username').value;
        user.fullname = document.getElementById('fullname').value;
        user.email = document.getElementById('email').value;
        user.course = document.getElementById('course').value;

        users.push(user)
        console.log(users)
    })
}

