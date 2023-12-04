const user = {

    username: "SHAYAN",
    loginCount : 9,
    signedIn : true,

getUserdetails : function(){
// console.log('got details from user');
// console.log(`username : ${this.username}`);
// console.log(this);
}
}

// console.log(user.username);
// console.log(user.getUserdetails());


function User(username,loginCount,IsloggedIn){
    this.username = username;
    this.loginCount =loginCount;
    this.IsloggedIn = IsloggedIn;

    return this
}

const userOne = new  User("SHAYAN", 10, true);
const usertwo =  new User("hitesh", 12, false)

console.log(userOne);
console.log(usertwo);