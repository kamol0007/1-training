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


/*Add post*/
const imgInp = document.getElementById("upload");
imgInp.onchange = function(evt){
    const [file] = evt.target.files;
    if (file) {
        document.getElementById("upload_img").src = URL.createObjectURL(file);
    }
}
var add_post = function(event) {
    event.preventDefault();
    console.log(event.target[1]);
    const title = event.target[0].value, img = event.target[1], discription = event.target[2].value;
    const [file] = img.files;
    let src = '', title_check = true, discription_check = true, img_check = true;
    if(!title){
        event.target[0].style.borderColor='red';
        title_check = false;
    }
    if(!discription){
        event.target[2].style.borderColor='red';
        discription_check = false;
    }
    if(file) src = URL.createObjectURL(file);
    else{
        document.getElementById("upload_label").style.borderColor='red';
        img_check = false; 
    }
    if(title_check&&discription_check&&img_check) document.getElementById("post_target").insertAdjacentHTML('beforeend', 
        '<div class="post-item"><div class="img-target"><img src="'+src+'" alt="img" class="img-fluid"></div><div class="context"><div><span>t</span><span>b</span></div><h4>'+title+'</h4><p>'+discription+'</p></div></div>'
    );
};
var form = document.getElementById("add-post-form");
form.addEventListener("submit", add_post, true);