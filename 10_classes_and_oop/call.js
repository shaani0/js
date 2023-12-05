function setUsername(username){
// COMPLEX  DB CALLS
this.username = username
console.log("called");
}

function createUser(username, email, password){

    setUsername.call(this, username)

    this.email = email
    this.password =password
}

const chai = new createUser("KHAN", "hh@gmail.com", "123")
console.log(chai);