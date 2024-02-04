const btnMenu = document.querySelector(".menu-icon");
let btnClose = document.querySelector(".btn-close");
const wrapper = document.querySelector(".mobile-list");
const description = document.querySelector(".container-content");

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