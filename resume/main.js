

const btnMenu = document.querySelector(".menu-icon");
let btnClose = document.querySelector(".btn-close");
const wrapper = document.querySelector(".mobile-list");
const wraperMain = document.querySelector(".test");
const fader = document.querySelector(".wrap-footer-content");
const element = document.querySelector(".hidden")

const appearOptions = {
  threshold: 0.2,
  // rootMargin: "-955px"

  // rootMargin: "-395px"
};

const apperOnScroll = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{
    if(!entry.isIntersecting){
      // entry.target.classList.remove('show');
      fader.classList.add('show');
      console.log("This is the if: " + entry)
    }else{
      // entry.target.classList.add('show');
      // apperOnScroll.unobserve(entry.target);
      fader.classList.remove('show');
      console.log("This is the else" + entry)
    }
  })
}, appearOptions);


  apperOnScroll.observe(wraperMain);







//Open & Close Menu Mobile
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