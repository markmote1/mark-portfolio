

import {projects} from "./projects.js"
window.onload = ()=>{

console.log('init')

let socials = document.querySelector('.socials')
let projectHolder = document.querySelector('#allProjects')
let canvas = document.querySelector('#canvas1')


let createCard = (project)=>{
    let titleHolder = document.createElement('h3')
    let descriptionHolder = document.createElement('p')
    let imageHolder = document.createElement('img')
    imageHolder.classList.add('cardImage')
    let card = document.createElement('li')

    titleHolder.textContent = project.title
    imageHolder.src = project.image
    descriptionHolder.textContent = project.description
    
    card.append(titleHolder,imageHolder, descriptionHolder)
    card.classList.add('projectWrapper')
    projectHolder.append(card)


    
   
}

projects.forEach(createCard)


console.log(projects)
canvas.height = 490
canvas.width = 200

let ctx = canvas.getContext('2d')
ctx.beginPath()
ctx.fillStyle = 'white'
ctx.arc(10,20,4,0,360)

ctx.fill()

document.addEventListener('scroll',(e)=>{
    console.log(e)
    socials.setAttribute('hidden','hidden')
    
})

document.addEventListener('scrollend',(e)=>{
    console.log(e)
    socials.removeAttribute('hidden')
    
    
    
})

//add a click me b4 i disa]ear button on canvas maybe to visit sth like github

}
