class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email =email
        this.password = password
    }
    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("khan","jk@gmail.com","123")

chai.addcourse();

const masalachai = new User("flash")
masalachai.logMe();

console.log(masalachai instanceof Teacher);