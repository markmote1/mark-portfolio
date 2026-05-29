

let socials = document.querySelector('#socials')

document.addEventListener('scroll',(e)=>{
    console.log(e)
    socials.classList.add('none')
    
})

document.addEventListener('scrollend',(e)=>{
    console.log(e)
    socials.classList.remove('none')
    
    
})

