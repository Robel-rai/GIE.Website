// Get the button element by its ID
const btn = document.getElementById('button');


// Add an event listener to the form for the 'submit' event
document.getElementById('form')
  .addEventListener('submit', function(event) {
     // Prevent the default form submission behavior
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_w6vxfv2';
    const templateID = 'template_w2ppdm4';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Thank you, we will get back to you!');
        this.rest(); //Clear the form
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });
