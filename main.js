let numhold = document.getElementById('num-count')
let num = document.getElementById('num-count').innerHTML
let wholenum = Number(num);
let increase = document.getElementById('increase')
let decrease = document.getElementById('decrease')

let int = setInterval(loading, 30)

increase.addEventListener('click', loading)

function loading(){
    numhold.innerHTML = wholenum++
    if(numhold.innerHTML >= 50){
        clearInterval(int)
        numhold.innerHTML = 50
    }
}

function decreasing(){
    numhold.innerHTML = wholenum--
}

decrease.addEventListener('click', decreasing)