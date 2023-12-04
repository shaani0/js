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

myHeros.khan()
myHeros.king()
// HeroPower.king()
