// FOR OF LOOP

// [" "," "," "] 
// [{},{},{}]

// const array = [1,2,3,4,5]

// for (const Num of array) {
//     // console.log(Num);
// }

// const greeting = "Hello world!"

// for (const greet of greeting) {
//     console.log(`every single word ${greet}`);
// }

// MAPS

const map = new Map()

map.set('IN', "india")
map.set('US', "United states of America")
map.set('Uk', "London")
// console.log(map);

for (const [key,value] of map) {
    console.log(key ,':-', value);
}

const myobject = {

    game1 : 'NFS',
    game :'IGI'

}