
const hire_me_btn = document.getElementById('hire-me-btn');
const talk_btn = document.getElementById('talk-btn');

hire_me_btn.addEventListener('click', (e)=>{
   e.preventDefault();
   window.location.href = "./contact.html";
});
talk_btn.addEventListener('click', (e)=>{
   e.preventDefault();
   window.location.href = "./resume.html";
});






const btn_all = document.querySelector('.btn-all');
const btn_app = document.querySelector('.btn-app');
const btn_api = document.querySelector('.btn-api');
const portfolio_display_work = document.querySelector('.portfolio-display-work');

document.addEventListener('DOMContentLoaded', ()=>{
portfolio_display_work.innerHTML = `
<div>
      <div class="porfolio-work-images">
         <p>smartAgro connect</p>
         <img src="./smartAgriculture.jpeg" alt="image" title="image">
      </div> 
      <div class="porfolio-work-images">
         <p>smartAgro connect</p>
         <img src="./smartAgriculture.jpeg" alt="image" title="image">
      </div>  
</div>
`;
});
btn_all.style.backgroundColor = '#00abf0'


btn_all.addEventListener('click', () =>{
   portfolio_display_work.innerHTML = `
   <div>
         <div class="porfolio-work-images">
            <p>smartAgro connect</p>
            <img src="./smartAgriculture.jpeg" alt="image" title="image">
         </div> 
         <div class="porfolio-work-images">
            <p>smartAgro connect</p>
            <img src="./smartAgriculture.jpeg" alt="image" title="image">
         </div>  
   </div>
   `;
   btn_all.style.backgroundColor = ' #00abf0';
   btn_all.style.transitionDuration = '0.5s';
   btn_app.style.backgroundColor = '#262f36';
   btn_api.style.backgroundColor = '#262f36';
});

btn_app.addEventListener('click', ()=>{
   portfolio_display_work.innerHTML = `
   <div>
      <div class="porfolio-work-images">
         <p>smartAgro connect</p>
         <img src="./smartAgriculture.jpeg" alt="image" title="image">
      </div>  
   </div>
   `;
   btn_app.style.backgroundColor = ' #00abf0';
   btn_app.style.transitionDuration = '0.5s';
   btn_all.style.backgroundColor = '#262f36';
   btn_api.style.backgroundColor = '#262f36';
});
btn_api.addEventListener('click', ()=>{
   portfolio_display_work.innerHTML = `
   <div>
      <div class="porfolio-work-images">
         <p>smartAgro connect</p>
         <img src="./smartAgriculture.jpeg" alt="image" title="image">
      </div>  
   </div>
   `;
   btn_api.style.backgroundColor = '#00abf0';
   btn_api.style.transitionDuration = '0.5s';
   btn_all.style.backgroundColor = '#262f36';
   btn_app.style.backgroundColor = '#262f36';
});


document.getElementsByClassName('contact-form').addEventListener('submit', (event)=> {
   event.preventDefault();

   var email = document.getElementById('email').value;
   var title = document.getElementById('title').value;
   var message = document.getElementById('message').value;

   sendEmail(email, title, message);
});

function sendEmail(email, title, message) {
   fetch('/send-email', {
      method: 'POST',
      headers: {
         'Content-Type':'application/json'
      },
      body: JSON.stringify({email: email, title: title, message: message})
   })
   .then(response => {
      if(response.ok) {
         alert('message sent successfully');
      }
      else {
         throw new Error('failed to send message');
      }
   })
   .catch(error => {
      console.error('Error:', error);
      alert('Failed to send message please try again');
   });
}