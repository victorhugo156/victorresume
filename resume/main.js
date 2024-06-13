

const btnMenu = document.querySelector(".menu-icon");
let btnClose = document.querySelector(".btn-close");
const btnAboutMe = document.querySelector("#modal-about-me")
const btnAboutMeClose = document.querySelector(".aboutMe-close");
const wrapper = document.querySelector(".mobile-list");
const wraperMain = document.querySelector(".scroll-review");
const fader = document.querySelector(".wrap-footer-content");
const element = document.querySelector(".hidden");
const modal = document.querySelector("dialog");

/*------------Function Modal About Me------------*/

btnAboutMe.onclick = function(){
  modal.showModal();
}

btnAboutMeClose.onclick = function(){
  modal.close();
  console.log("Im here")
}



/*------------Function Scroll Review Footer------------*/

const appearOptions = {
  threshold: .3,
  // rootMargin: "-955px"

  // rootMargin: "-395px"
};

const apperOnScroll = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{
    if(entry.isIntersecting){
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




/*------------Function Open & Close Menu Mobile------------*/

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