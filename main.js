const menuBtn = document.querySelector('#btn')
const items = document.querySelector('.items')
const icon = document.querySelector('#icon')

function openMenu(){
    items.classList.toggle('active')
}

menuBtn.addEventListener('click', () => {
    openMenu()
    if(icon.classList.contains('fa-bars')){
        icon.setAttribute('class', 'fa-solid fa-x')
    }else{
        icon.setAttribute('class', 'fa-solid fa-bars')
    }
})