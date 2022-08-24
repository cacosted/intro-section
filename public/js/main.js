const menuButton = document.querySelector('#menu')
const navContainer = document.querySelector('.navbar__container')
const closeButton = document.querySelector('#close-btn')
const navbarTitle = document.querySelectorAll('.navbar__title')

menuButton.addEventListener('click', () => {
  navContainer.classList.remove('hidden')  
})

closeButton.addEventListener('click', () => {
  navContainer.classList.add('hidden')
})

navbarTitle.forEach(title => {
  title.addEventListener('click', ({target}) => {
    const ulSibling = target.nextSibling.nextSibling
    const arrowImg = target.firstElementChild
    
    arrowImg.classList.toggle('turn-up')
    ulSibling.classList.toggle('hidden')

  })
})