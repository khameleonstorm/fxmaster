// fetching single user profile
document.addEventListener("DOMContentLoaded", () => {
  const profile = JSON.parse(localStorage.getItem("fxMasterUser"))
  if(profile) location = "index.html"
});



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
  e.preventDefault();
  const username = e.target.username.value
  const email = e.target.email.value
  const referral = e.target.referral.value
  const password = e.target.password1.value

  if(e.target.password2.value === e.target.password1.value){
      fetch("https://fxauth.vercel.app/api/users/signup", {
        method: "POST",
        headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"}, 
        body: JSON.stringify({ username, email, password, referral })
      })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("fxMasterUser", JSON.stringify(data));
        location = "/USER_DASH/Dashboard.html";
      })
      .catch(err => console.log("custom error: " + err))
  }
}



// send user Login data to backend
function handleLogin(e){
  e.preventDefault();
  const email = e.target.email.value
  const password = e.target.password.value
  console.log(email, password)

    fetch("https://fxauth.vercel.app/api/users/login", {
      method: "POST",
      headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"},
      body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("fxMasterUser", JSON.stringify(data));
      if(data.isAdmin) return location = "/ADMIN_DASH/Admin_dash.html";
      if(!data.isAdmin) return location = "/USER_DASH/Dashboard.html";
    })
    .catch(error => console.log("custom error: " + error))
}

