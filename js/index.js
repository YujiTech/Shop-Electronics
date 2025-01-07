const navbar = document.getElementById("navbar");
        window.onscroll = (e) =>{
          const scrollValue = window.scrollY;
          console.log(scrollValue);
          const valuescroll = 30;
          if(window.scrollY > valuescroll){
            // navbar.style.backgroundColor = "#FFFAFA";
            navbar.style.transition = "0.5s"
            navbar.style.padding = "0px 0px";
          }
          else{
            // navbar.style.backgroundColor = "transparent";
            navbar.style.transition = "0.5s"
            navbar.style.padding = "8px 0px";
          }
        }

// //  Change Mode (light or dark)
// document.getElementById("light").onclick = () => {
//   document.body.classList.remove("back-main");
//   document.getElementById("dark").classList.remove("d-none");
//   document.getElementById("light").classList.add("d-none");
// };
// document.getElementById("dark").onclick = () => {
//   document.body.classList.add("back-main");
//   document.getElementById("light").classList.remove("d-none");
//   document.getElementById("dark").classList.add("d-none");
// };
document.getElementById("light").onclick = () => {
  document.body.classList.add("bg-dark");
  document.getElementById("dark").classList.remove("d-none");
  document.getElementById("light").classList.add("d-none");
};
document.getElementById("lights").onclick = () => {
  document.body.classList.add("bg-dark");
  document.getElementById("darks").classList.remove("d-none");
  document.getElementById("lights").classList.add("d-none");
};
document.getElementById("dark").onclick = () => {
  document.body.classList.remove("bg-dark");
  document.getElementById("light").classList.remove("d-none");
  document.getElementById("dark").classList.add("d-none");
};
document.getElementById("darks").onclick = () => {
  document.body.classList.remove("bg-dark");
  document.getElementById("lights").classList.remove("d-none");
  document.getElementById("darks").classList.add("d-none");
};