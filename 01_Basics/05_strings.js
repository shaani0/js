const name = "hitesh"

let repocount = 50

console.log(`hello my name is ${name} and my repocount is ${repocount}`)

const gameName = new String ('shayan-khan-kk')

//console.log(gameName[0])
//console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("a"));

const newstring = gameName.substring(0,5)
console.log(newstring);

const anotherstring = gameName.slice(-5, 3)
console.log(anotherstring);

const newstringone = "  khan   "
console.log(newstringone);

console.log(newstringone.trim());

const url = "https:// hitesh.com/hitesh%20khan"

console.log(url.replace('%20','-'));

console.log(gameName.split('-'));