
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('i-toggle','bar-menu')

//Remover o menu mobile

const navLink = document.querySelectorAll('.l-link')

function linkAction(){
    // Link ativo
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu
    const navMenu = document.getElementById('bar-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
