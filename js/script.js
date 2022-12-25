
let navbar = document.getElementById('navbar').classList
let active_class = "navbar_scrolled"


document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
}

 window.onscroll = () =>{
   navbar.classList.remove('active');
 }

window.addEventListener('scroll', e => {
  if(pageYOffset > 450) navbar.add(active_class)
  else navbar.remove(active_class)
})
