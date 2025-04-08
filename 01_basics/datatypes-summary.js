// PRIMITIVE
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// const bigNumber = 6545545445454n

// REFERENCE TYPE (Non primitive)
// Array, Objects, Functions

const heros = ['shaktiman', 'nagraj', 'doga'];

let myObj =
{
    name: 'Gunjan',
    age: 22,
}

const myFunction = function(){
 console.log('Hello world');
 
}

console.log(typeof bigNumber);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory use (Primitive), Heap (Non-Primitive)

let myYoutubename
