class User {
    constructor(username, fullname, email, course) {
        this.username = username;
        this.fullname = fullname;
        this.email = email;
        this.course = course;
    }

    logIn(username, password) {
        console,log(`{ status: 'OK', message: 'user ${username} logged in!' }`)
    }

    completeQuest(quest) {

    }
}