
document.addEventListener('scroll', ()=>{
    const nav = document.querySelector('nav');

    if(window.scrollY > 0){
        nav.classList.add('scrolled');
    }
    else{
        nav.classList.remove('scrolled');
    }
});

const bar =document.getElementById("bar")
const links=document.querySelector(".right>ul")


if(bar){
    bar.addEventListener("click",()=>{
        links.classList.toggle('open')
    })
}

