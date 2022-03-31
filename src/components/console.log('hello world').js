// a javascript file inspired from fireship.io which goes onto show 
// weird javascript objects

// inshort, the javascript survival guide😉--fireship.io

console.log('hello world')
console.log((null==undefined));
function hello(){
    console.log('ueae');
    return 3;
}
console.log(typeof(hello()))
const random=String('hello');

var a=false;
var b=Boolean(false);
console.log(typeof(random))
console.log(typeof(a))
console.log(typeof(Number()))


//truthy falsy needed when  comparing stuff
console.log(!! 0)// 0 falsy
console.log(!! 3)// all num truthy
console.log(!! '')//empty string falsy
console.log(!! 'hjel')// value vako string truthy
console.log(!! [])// empty array truthy
console.log(!! {})//empty obj truthy
console.log(!! {ds:'fds'})//value vako obj truthy
// === is the way to check; checks both value and type


// diff way for ternary operator
// var x= truthy? 2: 5
// try catch finally
// if a variable is declared without keyword like var,let,const, then it will be global variable

var a=10
console.log(Math.random().toString(16))