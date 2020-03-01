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
    } else if (ohis> 2.5 && ohis<=6){
        alert('OHI-S = ' + ohis + ' Плохой уровень гигиены, очень высокий индекс')
    } else if (ohis>6 || ohis<0){
        alert('Этого не может быть, введите корректные значения!')}
};

/* window.addEventListener('load', function() {
    var card = document.querySelector(".card");
    card.classList.add("card_vis");
}); */

