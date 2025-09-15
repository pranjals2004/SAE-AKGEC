document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("⚠️ Please fill out all fields.");
    return;
  }

  // Use POST with JSON
  fetch("https://script.google.com/macros/s/AKfycbwpL6JAgK-UXazmLlXlRJD5atXFCoIen9zcLDQk6o7RkXIs0xltPI_avTYnFhbETFxR5g/exec", {
    method: "POST",
    mode: "cors",  // important for browser JS
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  })
  .then(response => {
    // Some Apps Script deployments with anonymous access may not return JSON
    return response.text(); 
  })
  .then(text => {
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { status: "success" }; // fallback if Apps Script doesn't return JSON
    }

    if (data.status === "success") {
      alert("✅ Thank you, " + name + "! Your message has been sent.");
      this.reset();
    } else {
      alert("❌ Error: " + (data.message || "Unknown error"));
      console.error(data);
    }
  })
  .catch(err => {
    console.error("Fetch error:", err);
    alert("❌ Something went wrong. Try again.");
  });
});
