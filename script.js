

window.onload = ()=>{
    console.log('init')
    let socials = document.querySelector('#socials')
let canvas = document.querySelector('#canvas1')

canvas.height = 500
canvas.width = 200

let ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.fillStyle = 'white'
ctx.arc(10,20,4,0,360)

ctx.fill()

document.addEventListener('scroll',(e)=>{
    console.log(e)
    socials.classList.add('none')
    
})

document.addEventListener('scrollend',(e)=>{
    console.log(e)
    socials.classList.remove('none')
    
    
})

//add a click me b4 i disa]ear button on canvas maybe to visit sth like github

}
