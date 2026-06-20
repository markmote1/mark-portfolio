
import { projects } from "./projects.js"
window.onload = () => {


  let socials = document.querySelector('.socials')
  let projectHolder = document.querySelector('#allProjects')
  let canvas = document.querySelector('#canvas1')
  let menuBtn = document.querySelector('#knowmeBtn')
  const nav = document.querySelector('#knowme')
  const arrowLine = document.querySelector('.arrow-line')
  const line = document.querySelector('.line')


  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open')
    menuBtn.setAttribute('aria-expanded', isOpen)

  }

  
  
)
window.addEventListener("scroll", () => {
  nav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
});


  let createCard = (project) => {
    let titleHolder = document.createElement('h3')
    let descriptionHolder = document.createElement('p')
    let imageHolder = document.createElement('img')
    let aHolder = document.createElement('a')
    imageHolder.classList.add('cardImage')
    let card = document.createElement('li')

    titleHolder.textContent = project.title
    imageHolder.src = project.image
    descriptionHolder.textContent = project.description
    let link = project.link
    aHolder.href = link
    aHolder.target = '_blank'


    card.append(titleHolder, imageHolder, descriptionHolder)
    card.classList.add('projectWrapper')
    aHolder.append(card)
    projectHolder.appendChild(aHolder)




  }

  projects.forEach(createCard)

  function sendToWhatsApp() {
    const name = document.getElementById('fullname').value.trim() ?? '';
    const message = document.getElementById('textarea').value.trim() ?? '';
    const submit = document.getElementById('submit')

    if (!name || !message) {
      alert('Please fill in both fields.');
      return;
    }

    const phone = '254705064027';
    const text = `Name: ${name}\nMessage: ${message}`;
    const encoded = encodeURIComponent(text);

    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');

  }
  submit.addEventListener('click', sendToWhatsApp)


  canvas.height = 490
  canvas.width = 200

  let ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.fillStyle = 'white'
  ctx.arc(10, 20, 4, 0, 360)

  ctx.fill()

  document.addEventListener('scroll', (e) => {
    console.log(e)
    socials.style.display = 'none'

  })

  document.addEventListener('scrollend', (e) => {
    console.log(e)
    socials.style.display = 'flex'



  })

}
