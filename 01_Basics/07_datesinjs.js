// DATES

let mydate = new Date

// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);

// let mycreateddate = new Date(2023, 0 ,23)

let mycreateddate = new Date("2023-02-12")
//console.log(mycreateddate.toLocaleString());

let mytimestamp = Date.now()

//console.log(mytimestamp);
//console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/ 1000));


let newdate = new Date("2023-3-3")
console.log(newdate.toLocaleString());
console.log(newdate.getDay());
console.log(newdate.getMonth());

newdate.toLocaleString('default' , {
   weekday:  "short"
})