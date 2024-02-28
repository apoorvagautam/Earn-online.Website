// const form_open = document.querySelector("#form-open");
// home = document.querySelector(".home"),
// formContainer = document.querySelector(".form_container"),
// formCloseBtn = document.querySelector(".form_close"),
// signupBtn = document.querySelector("#signup"),
// loginBtn = document.querySelector("#signup"),
// pwShowHide = document.querySelectorAll(".pw_hide");

// form_open.addEventListener("click",()=>home.classList.add("show"))
// formCloseBtn.addEventListener("click",()=>home.classList.remove("show"))


const form_open = document.querySelector("#form-open");
(home = document.querySelector(".home")),
  (form_container = document.querySelector(".form_container")),
  (formCloseBtn = document.querySelector(".form_close")),
  // (signupBtn = document.querySelector("#signup")),
  (signup_form = document.querySelector("#signup")),
  (loginBtn = document.querySelector("#login")),
  (pwShowHide = document.querySelectorAll(".pw_hide"));


form_open.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));


pwShowHide.forEach(icon=>{
  icon.addEventListener("click",() => {
    let getPwInput = icon.parentElement.querySelector("input");
    // console.log(getPwInput)
    if(getPwInput.type ==="passwordS"){
      getPwInput.type = "text"
      icon.classList.replace("fa fa-eye-slash" , "fa-eye");
    }else{
      getPwInput.type = "password"
      icon.classList.replace("fa fa-eye" , "fa-eye-slash");
    }
    

  })
});


// signupBtn.addEventListener("click",()=>{
  signup_form .addEventListener("click",(e)=>{
  e.preventDefault();
  form_container.classList.add("active")
});
loginBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  form_container.classList.remove("active")
});