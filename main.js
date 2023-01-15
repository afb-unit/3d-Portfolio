var typingeffect = new Typed(".multitext", {
    strings: ["Λᶠ Ꮦ Λß", "a Coder", "a Designer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backdelay: 1500
  })
 var loader = document.getElementById("preloader");
 window.addEventListener("load", function(){
   loader.style.display = "none";
 })

 let popup = document.getElementById("popup");
 function openpopup() {
     popup.classList.add("open-popup");
 }
 function closepopup() {
     popup.classList.remove("open-popup");
 }
 var menulist = document.getElementById("menulistt");
 menulist.style.maxHeight = "0px";
 function togglemenu(){
  if(menulist.style.maxHeight== "0px")
  {
    menulist.style.maxHeight= "165px";
 }
 else{
  menulist.style.maxHeight= "0px";
 }
}

var menulist = document.getElementById("menulistt");
 menulist.style.maxHeight = "0px";
 function tog(){
  if(menulist.style.maxHeight== "0px")
  {
    menulist.style.maxHeight= "165px";
 }
 else{
  menulist.style.maxHeight= "0px";
 }
}
const audio = new Audio();
audio.src = "./assets/glass sound effect.mp3";

setTimeout(function(){
  var msg = document.getElementById("loading-sp");
  msg.parentNode.removeChild(msg);
},42000
  );
