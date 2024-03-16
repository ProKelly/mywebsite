





const btn_all = document.querySelector('.btn-all');
const btn_app = document.querySelector('.btn-app');
const btn_api = document.querySelector('.btn-api');
const portfolio_display_work = document.querySelector('.portfolio-display-work');

portfolio_display_work.innerHTML = `
<div>
      <div class="porfolio-work-images">
         <p>smartAgro connect</p>
         <img src="./smartAgriculture.jpeg" alt="image" title="image">
      </div> 
      <div class="porfolio-work-images">
         <p>stream API</p>
         <img src="./learn4.jpeg" alt="image" title="image">
      </div>  
</div>
`;
btn_all.style.backgroundColor = 'var(--secondary-color)'


btn_all.addEventListener('click', () =>{
   portfolio_display_work.innerHTML = `
   <div>
         <div class="porfolio-work-images">
            <p>smartAgro connect</p>
            <img src="./smartAgriculture.jpeg" alt="image" title="image">
         </div> 
         <div class="porfolio-work-images">
            <p> stream API</p>
            <img src="./learn4.jpeg" alt="image" title="image">
         </div>  
   </div>
   `;
   btn_all.style.backgroundColor = ' var(--secondary-color)';
   btn_all.style.transitionDuration = '0.5s';
   btn_app.style.backgroundColor = 'var(--primary-color)';
   btn_api.style.backgroundColor = 'var(--primary-color)';
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
   btn_app.style.backgroundColor = 'var(--secondary-color)';
   btn_app.style.transitionDuration = '0.5s';
   btn_all.style.backgroundColor = 'var(--primary-color)';
   btn_api.style.backgroundColor = 'var(--primary-color)';
});
btn_api.addEventListener('click', ()=>{
   portfolio_display_work.innerHTML = `
   <div>
      <div class="porfolio-work-images">
         <p>stream API</p>
         <img src="./learn4.jpeg" alt="image" title="image">
      </div>  
   </div>
   `;
   btn_api.style.backgroundColor = 'var(--secondary-color)';
   btn_api.style.transitionDuration = '0.5s';
   btn_all.style.backgroundColor = 'var(--primary-color)';
   btn_app.style.backgroundColor = 'var(--primary-color)';
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


