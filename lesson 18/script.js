'use strict';

let a = '1';
if (a === 1){
    console.log('Верно');
}else{
    console.log('Не верно');
}



let item = true;
if (item != true){
    console.log('Верно');
}else{
    console.log('Не верно');
} //не верно

item = false;
if (item != true){
    console.log('Верно');
}else{
    console.log('Не верно');
} // верно

item = true;
item = (item != true) ? 'Верно' : 'Не верно';
console.log(item); // не верно

a = 2;
if (a>0 && a<4){
    console.log('Верно');
}else{
    console.log('Не верно');
}


let b;
//a = 1;
//b = 16;
if (a>3 && a<12 || b>=7 && b<15) {
    console.log('Верно');
}else{
    console.log('Не верно');
}

let month;
month = 23;
if (month == 12 || month > 0 && month <= 2){
    console.log('Winter');
}else if (month >=3 && month <= 5){
    console.log('Spring');
}else if (month >=6 && month <=8){
    console.log('Summer');
}else if (month >=9 && month <=11){
    console.log('Autumn');
}else{
    console.log('Such month doesnt exist! Put correct number 1-12');
}
