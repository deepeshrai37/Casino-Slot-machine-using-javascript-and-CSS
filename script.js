let value1= document.getElementById('value1')
let value2= document.getElementById('value2')
let value3= document.getElementById('value3')

let inpS= document.getElementById('inpS')

let values=[
    '😂', '😁', '😃', '😊', '😎', '😣', '🤐'
]

function getrandomvalue(){
    return values[Math.floor(Math.random() *7)]
}


let animationId
function updateAnimation(newSpeed){

    if (animationId) clearInterval(animationId)

    animationId= setInterval(() => {
        value1.innerText= getrandomvalue()
        value2.innerText= getrandomvalue()
        value3.innerText= getrandomvalue()
   }, 1000 / newSpeed)
   
}

inpS.onchange=function(ev){
   
 document.documentElement.style.setProperty('--speed', ev.target.value)

 updateAnimation(ev.target.value)
}