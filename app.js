const showMenu = (_toggle, navId) =>{
    const _toggle = document.getElementById(_toggle),
    nav = document.getElementById(navId)

    if(_toggle && nav){
        _toggle.addEventListner('click', ()=>{
            nav.classList._toggle('show')
        })
    }
}