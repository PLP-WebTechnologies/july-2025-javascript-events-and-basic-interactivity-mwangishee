// Light/Dark Mode
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.innerText = document.body.classList.contains("dark") 
    ? "Switch to Light Mode" 
    : "Switch to Dark Mode";
});

// Counter Game
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  countDisplay.innerText = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  countDisplay.innerText = count;
});

// Collapsible FAQ
const faqBtn = document.querySelector(".faq-toggle");
const faqAnswer = document.querySelector(".faq-answer");
faqBtn.addEventListener("click", () => {
  faqAnswer.classList.toggle("show");
});

// Form Validation
const form = document.getElementById("signupForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Email regex
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    message.style.color = "red";
    message.innerText = "❌ Please enter a valid email.";
  } else if (password.length < 6) {
    message.style.color = "red";
    message.innerText = "❌ Password must be at least 6 characters.";
  } else {
    message.style.color = "green";
    message.innerText = "✅ Signup successful!";
    form.reset();
  }
});
