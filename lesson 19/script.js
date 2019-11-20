'use strict';

//1

function isNumberInRange(number){
    if (0 < number && number< 10){
        return true;
    } else{
        return false;
    }
}

let number = prompt('Put number', 10);

if (isNumberInRange (number)) {
    alert ('True');
} else {
    alert ('False');
}

// isNumberInRange(); ???

//2

function isEven (number2){
    if (number2%2 == 0){
        return true;
    } else {
        return false;
    }
}

let number2 = prompt ('Put number once more', 10)

if(isEven (number2)){
    alert ('True');
} else {
    alert ('False');
}

// почему true/false не возвращаются в консоль??? АААААА!

//3 

let value = +prompt('value?', '');
switch (value){
    case 0: alert ('0');
    break;
    case 1: alert ('1');
    break;
    case 2 || 3 : alert ('2, 3');
    break;
    default: alert('Other')
}

console.log(value);

//4

function min(a,b){
    if (a<b){
        return a;
    } else{
        return b;
    }
}

console.log (min(2,-5));