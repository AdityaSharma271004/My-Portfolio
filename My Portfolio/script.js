const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").ariaValueMax,
        email_id : document.getElementById("email_id").value,
    }
    emailjs.send("service_ymx2l5p","template_5u6nsg7",params).then(function (res){
        alert("successfully!" + res.status);
    })
}