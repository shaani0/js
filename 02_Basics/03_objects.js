// singleton (create through constructror)
//object.create

//object literals

const mysym = Symbol("key1")


const jsUser = {
    name: "shayan",
    age : 22,
    "full name" : "shayan khan",
    location : "jaipur",
    mysym: "key1",
    Email : "sk@google.com",
    isloggedin : false,
    lastLoginDays : ["monday", "saturday"]
}

// console.log(jsUser.Email);
// console.log(jsUser["Email"]);
// console.log(jsUser["full name"]);
// console.log( jsUser[mysym]);



jsUser.Email = "hk@chatGPT.com"
// Object.freeze(jsUser)
jsUser.Email = "kk@vs.com"
// console.log(jsUser);

jsUser.greetings = function(){

    console.log("Hello js User");
}
jsUser.greetingsTwo = function(){

    console.log(`hello js User , ${this.name}`);
}


console.log(jsUser.greetingsTwo());