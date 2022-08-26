var contar1 = 0
var contar2 = 0
var contar3 = 0

function megusta(){
    console.log("click1");
    var num1 = document.querySelector('#like1')
    num1.innerText = contar1++

}
function megusta2(){
    console.log("click2");
    var num2 = document.querySelector('#like2')
    num2.innerText = contar2++

}

function megusta3(){
    console.log("click3");
    var num3 = document.querySelector('#like3')
    num3.innerText = contar3++

}
