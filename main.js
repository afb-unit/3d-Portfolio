//preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
 loader.style.display = "none";
})
//extra time pre
setTimeout(function(){
    var msg = document.getElementById("loading-sp1");
    msg.parentNode.removeChild(msg);
    },45000
    );
  //start
  document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('#section1');
    const button= section.querySelector('.maskbt');
    button.addEventListener('click', () => {
      section.classList.add('transition','animate');
      setTimeout(
        ()=> {
          section.classList.add('animate-completed');
        },1000
      )
    })
  });
  //auto type
  var typingeffect = new Typed(".multitext", {
    strings: ["Λᶠ Ꮦ ԹՅ", "a Developer", "a Designer"],
    loop: true,
    typeSpeed: 110,
    backSpeed: 130,
    backdelay: 1500
  })

//three line burger
var menulist = document.getElementById("nav-links");
menulist.style.maxHeight = "0vh";
function togglemenu(){
if(menulist.style.maxHeight== "0vh")
{
  menulist.style.maxHeight= "90vh";
}
else{
menulist.style.maxHeight= "0vh";
}
}

var menulist = document.getElementById("nav-links");
menulist.style.maxHeight = "0px";
function tog(){
if(menulist.style.maxHeight== "0px")
{
  menulist.style.maxHeight= "90vh";
}
else{
menulist.style.maxHeight= "0px";
}
}


//audio
const audio = new Audio();
audio.src = "./assets/glass sound effect.mp3";

//form popup
let popup = document.getElementById("popup");
function openpopup() {
    popup.classList.add("open-popup");
}
function closepopup() {
    popup.classList.remove("open-popup");
}

