// FOR 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best Number");
    }
    // console.log(element);
}

for (let i = 1; i <=  10; i++) {
    // console.log(`outer loop value ${i}`);
         for (let j = 1; j <= 10; j++) {
            // console.log(`inner loop value ${j}`);
            // console.log(i+ '*'+ j + '='+ i*j);
         }
}  
let myarray = ["flash","thanos","batman"]  
// console.log(myarray.length);
for (let index = 0; index < myarray.length; index++) {
    const element =myarray[index];
    // console.log(element);
    
}        

//  BREAK AND CONTINUE STATMENTS

for (let index =1; index <= 20; index++) {
    const element = index;

    if (element == 5) {
        console.log("DETECTED 5");
        break
    }
    console.log(element);
}
for (let index =1; index <= 20; index++) {
    const element = index;

    if (element == 5) {
        console.log("DETECTED 5");
        continue
    }
    console.log(element);
}