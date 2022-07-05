let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
}

 window.onscroll = () =>{
   navbar.classList.remove('active');
 }

 var slideIndex = [1,1,1,1,1,1];
 var slideId = ["mySlides", "mySlides-2", "mySlides-3", "mySlides-4", "mySlides-5", "mySlides-6"]
 showSlides(1, 0);
 showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

 function plusSlides(n, no) {
   showSlides(slideIndex[no] += n, no);
 }

 function showSlides(n, no) {
   var i;
   var x = document.getElementsByClassName(slideId[no]);
   if (n > x.length) {slideIndex[no] = 1}
   if (n < 1) {slideIndex[no] = x.length}
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
   }
   x[slideIndex[no]-1].style.display = "block";
 }
