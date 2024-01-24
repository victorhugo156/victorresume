const nav = document.querySelector('.header .container')
const toggle = document.querySelectorAll('.container .toggle')

for( const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav .grid .title');

for (const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

//COMANDO PARA COLOCAR SOMBRA NO HEADER QUANDO DER O SCROLL

const header = document.querySelector('.header')
const navHeigth = header.offsetHeight 

function changeHeaderWhenScroll(){

    if(window.scrollY >= navHeigth){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
}

//TESTIMONIALS CAROUSEL (SWIPER)

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination:{
        el: '.swiper-pagination'
    },
    mousewheel:true,
    keyboard:true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
  });

//SCROLL REVEAL

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
`#home .image, #home .text,
#about .image, #about .text,
#services .header, #services .card,
#testimonials .header, #testimonials .testimonials,
#contact .text, #contact .links,
#footer .text, #footer .social
`, { interval: 100 })

//BACK-TO-TOP BUTTON

const backToTop = document.querySelector(".back-to-top")

function BackToTop(){
    if(window.scrollY >= 560){
        backToTop.classList.add('show')
    }else{
        backToTop.classList.remove('show')
    }
}

//Logica Menu Ativo conforme a secao visivel na página

const sections = document.querySelectorAll('section[id]')

function activateMenu(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        }else{
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}


//Logica Scroll

window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    BackToTop()
    activateMenu()
})