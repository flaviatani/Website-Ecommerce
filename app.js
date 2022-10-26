const showMenu = (toggle, navId) =>{
    const toggle = document.getElementById(toggle),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListner('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}