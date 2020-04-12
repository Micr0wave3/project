'use strict';

a = 5;
console.log(a);

var leftBorderWidth = 1;
{
    let second = 2;
}
let second = 2;
const pi = 3.14;
console.log(leftBorderWidth)

//var types
var number = 5.3 //whole and pointed numbers
var string = "Hello!";
var sym = Symbol();
var boolean = true; //0 or 1
null; // nothing

undefined; // doesnt have znaczenie
var obj = {};

let something;
console.log(something);

let person = {
    name: "John",
    age: 69,
    isMarried: false
};

console.log(person.name) //two ways to show characteristics
console.log(person["age"]) //this one is less used, characteristic must be in "***"

let arr = ['plum.png','yesno.jpg','apple.bmp']; //can be used for any file types

console.log(arr[1])

alert("Hello, world!");//things wont work until "ok" is pressed

//let answer = confirm("Why are u gae?")//question
//
//console.log(answer)//gives a boolean answer to the question

let answer = +prompt("Are u having a mental breakdown?", "")//question with possible answer output from user
console.log(typeof(answer));

//console.log(answer)//gives an answer to the question

//console.log(typeof(answer))//gives a string

//console.log(typeof(arr))// gives an object, not string. same for null but its a mistake in language

//O*P*E*R*A*T*O*R*S

//console.log("arr" + " - object");
//console.log("arr" + " - object");

let incr = 10,
    decr = 10; // can count vars like this but ";" at the end is important
incr++;
decr--;

console.log(incr);//add 1
console.log(decr);//takeaway 1

console.log(5%2);//leftover from 5/2
console.log("2" == 2);//single = is giving, double == is comparing, triple === is comparing types

let isChecked = true,
    isClose = false;
console.log(isChecked && isClose);//&& confirmes when all are true

console.log(isChecked || isClose);//"||" called "OR" confirms if both are false


