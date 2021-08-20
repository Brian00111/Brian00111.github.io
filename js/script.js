
let btnContact=document.getElementById('btn-contact')

let menu=document.getElementById('menu_nav');
let menuLinks=document.querySelectorAll('#menu_nav a');
let menuBtn=document.getElementById('menu_ham');
let skillsBtn=document.getElementById('btn-skills');
let buscador=document.querySelectorAll('#search a');

let contentImg=document.getElementById('content-img');

menuBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation()

   menu.classList.toggle('active-nav');  
    menuBtn.classList.toggle('open');  
},false)


document.addEventListener('click',e=>{
    let click=e.target;

    if(menuBtn.classList.contains('open') && click != menu){
        menu.classList.toggle('active-nav');  
        menuBtn.classList.toggle('open'); 
    }

},false)

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('header').addClass('shrink');
    } else {
      $('header').removeClass('shrink');
    }
});

buscador.forEach(e=>{
let proyect=document.querySelector('.proyect');

    e.addEventListener('click',e=>{
        e.preventDefault();
        let dataId=e.target.getAttribute('data-id')
        
        switch(dataId){
            
        }
     
    })
})


document.getElementById('menu1').addEventListener('click',e=>{
    e.target.childNodes[1].classList.toggle('rotate')
    e.target.childNodes[3].classList.toggle('social1')
    e.target.childNodes[5].classList.toggle('social2')
    e.target.childNodes[7].classList.toggle('social3')
})
document.getElementById('menu2').addEventListener('click',e=>{
    e.target.childNodes[1].classList.toggle('rotate')
    e.target.childNodes[3].classList.toggle('social1')
    e.target.childNodes[5].classList.toggle('social2')
    e.target.childNodes[7].classList.toggle('social3')
})



window.sr=ScrollReveal();
sr.reveal('.moon-ilustration',{
    duration:3000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.present-1',{
    duration:3000,
    origin: 'top',
    distance: '100px'
    
})

sr.reveal('.present1-txt',{
    duration:3000,
    delay:700,
    origin: 'top',
    distance: '100px'
})

sr.reveal('.rocks',{
    duration:3000,
    origin: 'rigth',
    distance: '100px'
})

sr.reveal('.rocket',{
    duration:3000,
    origin: 'left',
    distance: '-200px'
})

sr.reveal('.services-comet',{
    duration:3000,
    origin: 'left',
    distance: '-200px'
})

sr.reveal('.container-cube',{
    duration:3100,
    origin: 'top',
    distance: '100px'
    
})

sr.reveal('.container-porcentaje',{
    duration:3100,
    origin: 'top',
    distance: '100px'
    
})

sr.reveal('.proyect-1',{
    duration:3000,
    origin: 'rigth',
    distance: '100px'
    
})

sr.reveal('.proyect-2',{
    duration:3000,
    origin: 'left',
    distance: '100px'
    
})
