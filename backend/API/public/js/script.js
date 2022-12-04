function openMenu(){
    document.getElementById("menuLateral").style.display = "inline";
}
function closeMenu(){
    document.getElementById("menuLateral").style.display = "none";
}

closeMenu();

let input = document.getElementById("image");
let imageName = document.getElementById("imageName")

input.addEventListener("change", ()=>{
let inputImage = document.querySelector("input[type=file]").files[0];

    imageName.innerText = inputImage.name;
})
/*const menuItems = document.querySelectorAll('.menuLateral .options a');
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
} */