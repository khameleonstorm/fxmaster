const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });


    // PRELOADER
    // WEBSITE PRELOADER
var loader = document.querySelector(".loader")


window.addEventListener("load", vanish)

function vanish() {
  loader.classList.add("disappear");
}




// send user sign up data to backend
function handleSignup(e){
  const username = e.target.username.value
  const email = e.target.email.value

  if(e.target.password2.value === e.target.password1.value){
    fetch("https://fxauth.vercel.app/api/users/signup", {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({
        username, 
        email, 
        password: 
        e.target.password1.value,
      })
    }).then(res => {
      console.log("Request complete! response:", res);
    }).catch(ex => {
      console.log("custom error", ex)
    })
  }

  e.preventDefault();
}

