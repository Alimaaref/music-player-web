const menuBtn = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn')
const navParts = document.querySelectorAll('.sidebar nav a')

//sidebar functionality

menuBtn.addEventListener('click',()=>{
    sidebar.classList.add('active')
    overlay.classList.add('active')
})

closeBtn.addEventListener('click',()=>{
    sidebar.classList.remove('active')
    overlay.classList.remove('active')
})

navParts.forEach((navpart)=>{
    navpart.addEventListener('click',()=>{
        sidebar.classList.remove('active')
        overlay.classList.remove('active')
    })
})
