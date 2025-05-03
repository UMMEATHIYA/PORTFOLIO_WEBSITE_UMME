function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// // Toggle the chatbot window
// function toggleChatbot() {
//     const chatbot = document.getElementById('chatbot-container');
//     const chatbotButton = document.getElementById('chatbot-button');
  
//     // Toggle visibility of the chatbot window
//     if (chatbot.style.display === 'block') {
//       chatbot.style.display = 'none';
//       chatbotButton.style.display = 'block';  // Show chatbot button when window is closed
//     } else {
//       chatbot.style.display = 'block';
//       chatbotButton.style.display = 'none';  // Hide chatbot button when window is open
//     }
//   }


  (function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
      if (!document.getElementById('root')) {
        var root = d.createElement('div');
        root.id = 'root';
        d.body.appendChild(root);
      }
      if (window.myChatWidget && typeof window.myChatWidget.load === 'function') {
        window.myChatWidget.load({
          id: 'b7313194-2108-41d5-b60a-253d608562fd',
        });
      }
    };
    v.src = "https://agentivehub.com/production.bundle.min.js";
    v.type = "text/javascript";
    s.parentNode.insertBefore(v, s);
  })(document, 'script');


  // Initialize EmailJS
(function() {
  emailjs.init("oKb3fxTJXnbXFXJ6Z"); // your public key
})();

// Function to send the email when "Send" button is clicked
function sendEmail() {
  const message = document.getElementById("message").value;

  if (!message.trim()) {
    alert("Please enter a message before sending.");
    return;
  }

  const templateParams = {
    name: "Website Visitor",
    email: "noreply@ummeathiya.com",
    message: message,
  };

  emailjs.send("service_z1i5ad8", "template_dkl30wn", templateParams)
    .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Your message has been sent! 🎉");
      document.getElementById("message").value = ""; // clear message box
    }, function(error) {
      console.error("FAILED...", error);
      alert("Oops! Something went wrong. Please try again.");
    });
}

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    document.querySelectorAll('.project-card').forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category.includes(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

