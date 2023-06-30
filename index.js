const openSidebar = document.querySelector('.open-sidebar')
const closeSidebar = document.querySelector('.close-sidebar')
const sidebar = document.querySelector('.blackout')

openSidebar.addEventListener('click', () => {
  sidebar.classList.add('show')
})

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('show')
})