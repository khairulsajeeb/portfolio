let toggle = document.getElementById('toggle')
let menu = document.getElementById('menu')

let isShow =  false
toggle.addEventListener('click',()=>{
  if (isShow == false) {
    menu.style.right = '0'
    isShow = true
  } else {
    menu.style.right = '-60%'
    isShow = false
  }
})



// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formMessage').innerText = "Message Sent Successfully!";
        document.getElementById('formMessage').style.color = "green";
        this.reset();
    } else {
        document.getElementById('formMessage').innerText = "Please fill in all fields!";
        document.getElementById('formMessage').style.color = "red";
    }
});




