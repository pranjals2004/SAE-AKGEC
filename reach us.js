// Initialize EmailJS
(function(){
    emailjs.init("M0QclacVGxa1u9CIB"); // Replace with your EmailJS public key
})();

const form = document.getElementById("saeForm");
const messageEl = document.getElementById("formMessage"); // Make sure <p id="formMessage"></p> exists

form.addEventListener("submit", function(event){
    event.preventDefault();

    emailjs.sendForm("service_rxldr66", "template_t6x8waa", this)
    .then(function() {
        // Show success message
        messageEl.textContent = "✅ Form submitted successfully!";
        messageEl.style.color = "green";

        form.reset(); // Clear the form

        // Fade out message after 5 seconds
        setTimeout(() => {
            messageEl.style.opacity = 0;
            setTimeout(() => {
                messageEl.textContent = "";
                messageEl.style.opacity = 1; // reset for next time
            }, 1000);
        }, 5000);

    }, function(error) {
        // Show error message
        messageEl.textContent = "❌ Failed to send form. Please try again.";
        messageEl.style.color = "red";

        setTimeout(() => {
            messageEl.style.opacity = 0;
            setTimeout(() => {
                messageEl.textContent = "";
                messageEl.style.opacity = 1;
            }, 1000);
        }, 5000);
    });
});
