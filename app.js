/*$(document).ready(function(){
 $('slider').slick({
  arrows:false,
  dots:true,
  appendDots: 'slider-dots',
  dotsClass: 'dots'
 });



 let hamberger = document.querySelector('.hamberger');
 let times = document.querySelector('.times');
 let mobileNav = document.querySelector('.mobileNav');


 hamberger.addEventListener('click', function(){
 mobileNav.classList.add('open');
 });

 hamberger.addEventListener('click', function(){
    mobileNav.classList.remove('open');

 });
//});*/





/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
   var x = document.getElementById("myLinks");
   if (x.style.display === "block") {
     x.style.display = "none";
   } else {
     x.style.display = "block";
   }
   
 }