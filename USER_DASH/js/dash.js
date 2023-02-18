// fetching single user profile
document.addEventListener("DOMContentLoaded", () => {
  const profile = JSON.parse(localStorage.getItem("fxMasterUser"))
  if(!profile) return location = "/register.html";
  const {_id, username, email, deposit, withdraw, referralBonus, isAdmin} = profile
  if(isAdmin) return location = "/ADMIN_DASH/Admin_dash.html";
  document.getElementById("username").innerHTML = username;
  document.getElementById("bal").innerHTML = deposit + referralBonus;
  console.log(_id, username, email, deposit, withdraw, referralBonus)
});


// Menu Toogle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
let cardBox = document.querySelector(".cardBox");
let details = document.querySelector(".details");


toggle.onclick = function() {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
    cardBox.classList.toggle("active");
    details.classList.toggle("active");
}



 // PRELOADER
    // WEBSITE PRELOADER
    var loader = document.querySelector(".loader")


    window.addEventListener("load", vanish)
    
    function vanish() {
      loader.classList.add("disappear");
    }

    function handleSignOut() {
      localStorage.removeItem('fxMasterUser')
      location = "/register.html";
    }