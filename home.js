const hire_me_btn = document.getElementById('hire-me-btn');
const talk_btn = document.getElementById('talk-btn');

hire_me_btn.addEventListener('click', (e)=>{
   window.location.href = "./contact.html";
});
talk_btn.addEventListener('click', (e)=>{
   window.location.href = "./resume.html";
});