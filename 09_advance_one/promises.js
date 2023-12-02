// const promiseOne = new Promise(function(resolve, reject){

// // DO AN ASYNC TASK
// //  DB CALLS, CRYPTOGRAPHY , NETWORK CALLS

//     setTimeout(function(){
//     console.log("ASYNC TASK IS COMPLETED")
//     resolve()
//     }, 1000)
    
// });

// promiseOne.then(function(){
//     console.log("PROMISE CONSUMED")
// });


// new Promise(function(resolve, reject){
//      setTimeout(function(){
//         console.log('ASYNC 2  IS COMPLTED')
//         resolve();
//      }, 1000)

// }).then(function(){
//     console.log('ASYNC 2 RESOLVED')
// });


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username : "khan", email : "kk@example.com"});

//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "KHAN", password : "12345"})
        } else{
            reject('SOMETHING WENT WRONG')
        }
    }, 1000)
   
});

promiseFour.then(function(user){
console.log(user);
return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log('THE PROMISE IS EITHER RESOLVED OR REJECTED'))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "KHAN", password : "12345"})
        } else{
            reject('ERROR : SOMETHING WENT WRONG')
        }
    }, 1000)
})

async function consumepromiseFive(){
    try {
       const response = await promiseFive
       console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumepromiseFive()

// async function getallusers(){
//    try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
    
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log('E : error');
//    }
// }

// getallusers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then( (response) => {
    return response.json()
})
.then((data) => {
console.log(data);
})
.catch((error) => {
      console.log(error);
})