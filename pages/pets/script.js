document.querySelector('#logo').onclick=()=>{document.location.href='../main/index.html'}

//mobile-menu
document.querySelector('#burger').addEventListener('click', () => {
    document.querySelector('#mobile-menu').style.right = 0
    setTimeout(() => { document.querySelector('#under-burger').style.transform = "rotate(90deg)" }, 500)
    document.querySelector('#cover-elem').style.display = "block"
})
document.querySelector('#under-burger').addEventListener('click', closeMenu)
document.querySelector('#cover-elem').addEventListener('click', closeMenu)
document.querySelector('#our-pets').addEventListener('click', closeMenu)
function closeMenu() {
    document.querySelector('#under-burger').style.transform = "rotate(0deg)";
    setTimeout(() => { document.querySelector('#mobile-menu').style.right = '-320px' }, 500)
    document.querySelector('#cover-elem').style.display = "none"
}