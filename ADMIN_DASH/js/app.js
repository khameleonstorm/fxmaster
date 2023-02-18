document.addEventListener("DOMContentLoaded", () => {
if(!localStorage.getItem("fxMasterUser")) return location = "/register.html";
//getting user info from localStorage and checking if user is Admin
const { isAdmin } = JSON.parse(localStorage.getItem("fxMasterUser"))
if(!isAdmin) return location = "/USER_DASH/Dashboard.html";

// fetch all users
fetch("https://fxauth.vercel.app/api/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
});


let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click",()=>
{
	nav.classList.toggle("navclose");
})

