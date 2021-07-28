/*Nav Mobile*/
document.getElementById("open-btn").onclick = function() {
    document.getElementById("mobile_nav").style.display='block';
    document.body.style.overflow = 'hidden';
}
document.getElementById("close-btn").onclick = function() {navClose();}
function navClose() {
    document.getElementById("mobile_nav").style.display='none';
    document.body.style.overflow = null;
}

/*Scroll*/ 
window.onscroll = function() {Scrolling();};
var header = document.getElementById("header");
var back_to_top = document.getElementById("back-to-top");
var sticky = false;
function Scrolling() {
    console.log('window.pageYOffset', window.pageYOffset);
    if(window.pageYOffset>50){
        if(!sticky){
            header.classList.add("scroll-header"); 
            back_to_top.style.display='inline'; 
        } 
        sticky=true;
    }else{
        if(sticky){
            header.classList.remove("scroll-header"); 
            back_to_top.style.display='none'; 
        } 
        sticky=false;
    }
}
