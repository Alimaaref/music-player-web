const menuBtn = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn')
const navParts = document.querySelectorAll('.sidebar nav a')
/*
const playBtns = document.querySelectorAll('play-btn-track')
const pauseBtns = document.querySelectorAll('pause-btn-track')
 */
const tracks = document.querySelectorAll('.track')

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

//songs funcationality


tracks.forEach((track) =>{
    const playBtn = track.querySelector('.play-btn-track')
    const pauseBtn = track.querySelector('.pause-btn-track')
    const audio = track.querySelector('audio')
    playBtn.addEventListener('click',()=>{
        stopOther()
        audio.play()
        playBtn.classList.add('played')
        pauseBtn.classList.add('played')
    })
    pauseBtn.addEventListener('click',()=>{
        audio.pause()
        playBtn.classList.remove('played')
        pauseBtn.classList.remove('played')
    })
})

function stopOther(){
    const audios  = document.querySelectorAll('audio')
    const playBtns = document.querySelectorAll('.play-btn-track')
    const pauseBtns = document.querySelectorAll('.pause-btn-track')
    audios.forEach(audio => {
        audio.pause()
        playBtns.forEach(playBtn =>{
            playBtn.classList.remove('played') 
        })
        pauseBtns.forEach(pauseBtn =>{
            pauseBtn.classList.remove('played')      
        })
    })
}

