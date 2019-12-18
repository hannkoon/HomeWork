'use strict'

function myFunction() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    let d = +document.getElementById("d").value;
    let e = +document.getElementById("e").value;
    let f = +document.getElementById("f").value;
    let aa = +document.getElementById("aa").value;
    let bb = +document.getElementById("bb").value;
    let cc = +document.getElementById("cc").value;
    let dd = +document.getElementById("dd").value;
    let ee = +document.getElementById("ee").value;
    let ff = +document.getElementById("ff").value;
           
    let ohis = (a + b + c + d + e +f)/6 + (aa + bb + cc + dd + ee +ff)/6;
    if (ohis>=0 && ohis<=0.6){
        alert('OHI-S = ' + ohis + ' Хороший уровень гигиены, низкий индекс')
    } else if (ohis>0.6 && ohis<=1.6){
        alert('OHI-S = ' + ohis + ' Удовлетворительный уровень гигиены, средний индекс')
    } else if (ohis>1.6 && ohis<=2.5){
       alert('OHI-S = ' + ohis + ' Неудовлетворительный уровень гигиены, высокий индекс')
    } else if (ohis > 2.5){
        alert('OHI-S = ' + ohis + ' Плохой уровень гигиены, очень высокий индекс')
    };
  };


  /*

let a = Number(prompt('Вестибулярная поверхность 1.6, ЗУБНОЙ НАЛЕТ, от 0 до 3', 0))
let b = Number(prompt('Вестибулярная поверхность 1.1, ЗУБНОЙ НАЛЕТ, от 0 до 3', 0));
let c = Number(prompt('Вестибулярная поверхность 2.6, ЗУБНОЙ НАЛЕТ, от 0 до 3', 0));
let d = Number(prompt('Вестибулярная поверхность 3.1, ЗУБНОЙ НАЛЕТ, от 0 до 3', 0));
let e = Number(prompt('Оральная поверхность 3.6, ЗУБНОЙ НАЛЕТ, от 0 до 3', 0));
let f = Number(prompt('Оральная поверхность 4.6, ЗУБНОЙ НАЛЕТ, от 0 до 3', 0));

let aa = Number(prompt('Вестибулярная поверхность 1.6, ЗУБНОЙ КАМЕНЬ, от 0 до 3', 0));
let bb = Number(prompt('Вестибулярная поверхность 1.1, ЗУБНОЙ КАМЕНЬ, от 0 до 3', 0));
let cc = Number(prompt('Вестибулярная поверхность 2.6, ЗУБНОЙ КАМЕНЬ, от 0 до 3', 0));
let dd = Number(prompt('Вестибулярная поверхность 3.1, ЗУБНОЙ КАМЕНЬ, от 0 до 3', 0));
let ee = Number(prompt('Оральная поверхность 3.6, ЗУБНОЙ КАМЕНЬ, от 0 до 3', 0));
let ff = Number(prompt('Оральная поверхность 4.6, ЗУБНОЙ КАМЕНЬ, от 0 до 3', 0));

let ohis = (a + b + c + d + e +f)/6 + (aa + bb + cc + dd + ee +ff)/6;
if (ohis>=0 && ohis<=0.6){
    alert('OHI-S = ' + ohis + ' Хороший уровень гигиены, низкий индекс')
} else if (ohis>0.6 && ohis<=1.6){
    alert('OHI-S = ' + ohis + ' Удовлетворительный уровень гигиены, средний индекс')
} else if (ohis>1.6 && ohis<=2.5){
   alert('OHI-S = ' + ohis + ' Неудовлетворительный уровень гигиены, высокий индекс')
} else if (ohis > 2.5){
    alert('OHI-S = ' + ohis + ' Плохой уровень гигиены, очень высокий индекс')
}; 




   */