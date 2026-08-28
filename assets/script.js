const menu=document.querySelector(".menu"),nav=document.querySelector("nav");if(menu&&nav)menu.addEventListener("click",()=>nav.classList.toggle("open"));
function shareStory(){if(navigator.share){navigator.share({title:document.title,url:location.href})}else{navigator.clipboard?.writeText(location.href);alert("Story link copied!");}}
function submitContact(e){e.preventDefault();alert("Thanks! Connect this form to your email service or backend before publishing.");return false;}
