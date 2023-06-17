let movezoon = document.getElementById('movezoon')
let yellow = document.getElementById('yellow')
let purple = document.getElementById('purple')
let blue = document.getElementById('blue')
let green = document.getElementById('green')
let slow = document.getElementById('slow')
let quick = document.getElementById('quick')

movezoon.onmousemove= f1
// movezoon.onmouseleave = f2
let a=5
let b = 5
function f1(){
    a+=b
    let newW = String(a)+'px'
    wake.style.width = newW
}

function f2(){
a=5
let newW = String(a)+'px'
wake.style.width=newW
}

yellow.onclick = f3
purple.onclick = f4
blue.onclick = f5
green.onclick = f6

function f3(){
    wake.style.backgroundColor = 'yellow'
}

function f4(){
    wake.style.backgroundColor = 'purple'
}
function f5(){
    wake.style.backgroundColor = 'blue'
}
function f6(){
    wake.style.backgroundColor = 'green'
}

slow.onclick = f7
quick.onclick = f8


function f7(){
    slow.style.backgroundColor = 'purple'
    quick.style.backgroundColor = 'white'
    b=2
}
function f8(){
    quick.style.backgroundColor = 'purple'
    slow.style.backgroundColor = 'white'
    b=10
}