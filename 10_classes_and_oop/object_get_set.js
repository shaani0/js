const user = {
    _email : 'ha@gmail.com',
    _password : "password",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email =value
    }
}
const tea = Object.create(user)
console.log(tea._email);
