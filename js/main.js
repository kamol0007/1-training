/*Nav Mobile*/
var mobile_nav = document.getElementById("mobile_nav");
document.getElementById("open-btn").onclick = function() {
    mobile_nav.style.display='block';
    document.body.style.overflow = 'hidden';
};
document.getElementById("close-btn").onclick =  function navClose() {
    mobile_nav.style.display='none';
    document.body.style.overflow = null;
};

/*Scroll*/ 
window.onscroll = function() {Scrolling();};
var header = document.getElementById("header"), 
    back_to_top = document.getElementById("back-to-top"),
    sticky = false;
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
var form = document.getElementById("add-post-form"), 
    imgInp = document.getElementById("upload"),
    addPost = document.getElementById("add-post"),
    addPostItem = document.getElementById("add-post-item"),
    postSaveClose = document.getElementById("post_save_close"),
    postTitle = document.getElementById("post_title"),
    postDiscription = document.getElementById("post_discription"),
    uploadImg = document.getElementById("upload_img"),
    uploadLabel = document.getElementById("upload_label"),
    postTarget = document.getElementById("post_target"),
    post_last_id=1;
    
addPost.onclick = function() {
    this.style.display='none';
    addPostItem.style.display='block';
    addPostItem.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
};
postSaveClose.onclick = function() {
    addPostItem.style.display='none';
    addPost.style.display='block';
    postTitle.style.borderColor='#ced4da';
    postDiscription.style.borderColor='#ced4da';
    uploadLabel.style.borderColor='#ced4da';
    postTitle.value = '';
    postDiscription.value = '';
    uploadImg.src = 'img/upload.png';
    imgInp.value = null;
    if(post_last_id>1) document.getElementById("post-"+(post_last_id-1) ).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    else addPost.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
};
postTitle.onchange = function() {
    this.style.borderColor='#ced4da';
};
postDiscription.onchange = function() {
    this.style.borderColor='#ced4da';
};
imgInp.onchange = function(evt){
    uploadLabel.style.borderColor='#ced4da';
    const [file] = evt.target.files;
    if (file) uploadImg.src = URL.createObjectURL(file);
};
var add_post = function(event){
    event.preventDefault();
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
        uploadLabel.style.borderColor='red';
        img_check = false; 
    }
    if(title_check&&discription_check&&img_check){
        postTarget.insertAdjacentHTML('beforeend', 
            '<div id="post-'+post_last_id+'" class="post-item"><div class="img-target"><img src="'+src+'" alt="img" class="img-fluid"></div><div class="context"><div><span>t</span><span>b</span></div><h4>'+title+'</h4><p>'+discription+'</p></div></div>'
        );
        addPostItem.style.display='none';
        addPost.style.display='block';
        postTitle.value = '';
        postDiscription.value = '';
        uploadImg.src = 'img/upload.png';
        imgInp.value = null;
        document.getElementById("post-"+post_last_id).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        post_last_id++;
    }
};
form.addEventListener("submit", add_post, true);