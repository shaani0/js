const promiseOne = new Promise(function(resolve, reject){
       setTimeout(function(){
        console.log('ASYNC TASK IS COMPLETED')
        resolve();
       }, 1000)
       
})

promiseOne.then(function(){
console.log('TASK 1 COMPLETED');
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('ASYNC TASK 2 IS COMPLETED');
        resolve();
    }, 1000)
})
.then(function(){
console.log('TASK 2 COMPLETED');
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "SHAYAN", email : "kk@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "KHAN", password: "12345"})
        }else{
            reject('E: ERROR')
        }
    }, 1000)
    } )
    

promisefour.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})


const promisefive =  new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "KHAN", password: "12345"})
        }else{
            reject('E: ERROR')
        }
    }, 1000)
});

async function consumepromisefive(){
 try {
    const response = await promisefive
    console.log(response);
 } catch (error) {
    console.log(error);
 }
}

consumepromisefive()


// async function GetAllUsers(){
//   try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// GetAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

