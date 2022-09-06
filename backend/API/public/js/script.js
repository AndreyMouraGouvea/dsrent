function openMenu(){
    document.getElementById("menuLateral").style.display = "inline";
}
function closeMenu(){
    document.getElementById("menuLateral").style.display = "none";
}

closeMenu();

const menuItems = document.querySelectorAll('.menuLateral .options a');
const headerHeight = document.querySelector('.header').offsetHeight;

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(event){
    event.preventDefault();

    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: to - headerHeight,
        behavior: 'smooth',
    });
}