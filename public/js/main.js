const menuButton = document.querySelector('#menu')
const navContainer = document.querySelector('.navbar__container')

menuButton.addEventListener('click', () => {
  navContainer.classList.toggle('hidden')  
})