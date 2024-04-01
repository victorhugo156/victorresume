

const btnMenu = document.querySelector(".menu-icon");
let btnClose = document.querySelector(".btn-close");
const wrapper = document.querySelector(".mobile-list");
const description = document.querySelector(".container-content");

/*
const observer = new IntersectionObserver((entries)=>{
  console.log(entries)
 
  Array.from(entries).forEach( entry =>{
      entries.intersectionRatio
      entry.target.classList.add('init-hidden-off')
 
  }, {
    threshold: [0, .5, 1]
  })
  
})

Array.from(document.querySelectorAll('.init-hidden')).forEach(element =>{
  observer.observe(element)
  
})*/

const header = document.querySelector('.header')
const navHeight = header.offsetHeight
console.log(navHeight)

function changeHeaderWhenScroll(){
  if(window.scrollY >= navHeight){
    header.classList.add('scroll')
    console.log("I'm into the if")
  }else{
    header.classList.remove('scroll')
    console.log("Im into the else")
  }
}


btnMenu.addEventListener("click", function(){
  wrapper.classList.toggle("active");
  //wrapper.classList.add("active");
  
  if(wrapper.classList.contains("active")){
    btnMenu.style.display = "none";
    btnClose.style.display = "flex";
    wrapper.style.display = "flex";
  } 
})

btnClose.addEventListener("click", function(){
  closeBtn();
})


function closeBtn(){
  wrapper.classList.toggle("active");
  //btnClose.classList.remove("active");
  btnMenu.style.display = "block";
  btnClose.style.display = "none";
  wrapper.style.display = "none";
}