// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.email = "hl@gmail.com"
isloggedIn = false

// console.log(tinderUser);

const regularUser = {

    fullname : {
        firstName: "shayan",
        lastName:  "khan"
    }
}
// console.log(regularUser.fullname.lastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}


// const obj3 = {obj1,  obj2}
// const obj3 = Object.assign({}, obj1, obj2,obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const user = [
    {
        id: "12",
        email: "lk@gamil.com"
    },
    {
        id: "12",
        email: "lk@gamil.com"
    },
    {
        id: "12",
        email: "lk@gamil.com"
    },
    {
        id: "12",
        email: "lk@gamil.com"
    }
]

// user[1].id
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));


const course = {

    course: "js in hindi",
    courseFee: "999",
    courseInstructor: "hitesh"

}

const{courseInstructor: Instructor} = course

console.log(Instructor);
 
// ++++++++++++++++ JSON basic ++++++++++++++++++
// {
//     "name": "hitesh",
//     "email": "hh@mail.com",
//     "price": "free"

// }