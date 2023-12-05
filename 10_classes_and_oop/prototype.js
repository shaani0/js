// let myName = "KHAN    "
// let myChannel  = "chai"

// console.log(myName.length);
// console.log(myName.truelength);

let myHeros = ["thor", "flash"]

let HeroPower = {
    thor : "hammer",
    flash : "blink",

    getflashpower : function(){
        console.log(`flash power is ${this.flash}`);
    }
}

Object.prototype.khan = function(){
    console.log(`khan is present in all objects`);
}

Array.prototype.king = function(){
    console.log(`king says hey`);
}

// myHeros.khan()
// myHeros.king()
// HeroPower.king()


const user = {
    name: "shayan",
    email: "ss@gamil.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport ={
    isAvailable : false

}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proto__: TeachingSupport
    
}

Teacher.__proto__ = user

// MODERN SYNTAX

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherusername = "chai aur code     "


String.prototype.trueLength =function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
}

anotherusername.trueLength()
"hitesh".trueLength()
"icetea".trueLength()