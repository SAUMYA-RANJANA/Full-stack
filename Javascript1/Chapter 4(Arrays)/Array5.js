let NaturalNumbers=["1","2","3","4","5","6","7","8"];
let marvelheros=["thor","spiderman","ironman","antman"];
let dcheros=["superman","batman"];
let indianheros=["shaktiman","Flying jatt","Human"];
let heros=marvelheros.concat(indianheros);//add both arrays
let heros2=indianheros.unshift("Minnal Murli");//add from strating
marvelheros.shift();//deleted from strating
console.log(marvelheros.slice(1,2));//item from 1
console.log(indianheros.slice(1,3));//from 1 to 2
console.log(NaturalNumbers.splice(2,3,45,96,54));
console.log(heros);
console.log(heros2);