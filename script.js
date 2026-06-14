
let helloButton = document.getElementById('hello-btn');
let greetingText = document.getElementById('greeting');

helloButton.addEventListener('click', function () {
    let currentHour = new Date().getHours();
    let timeGreeting = "";

    if (currentHour < 12) {
        timeGreeting = "Good Morning!";
    } else if (currentHour < 18) {
        timeGreeting = "Good Afternoon!";
    } else {
        timeGreeting = "Good Evening!";
    }

    greetingText.innerHTML = timeGreeting + " I am <span>Danish K</span>";
    helloButton.innerText = "Thanks for visiting!";
    helloButton.style.backgroundColor = "#10b981";
    helloButton.style.color = "#ffffff";
});

let contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let userName = document.getElementById('name').value;

    alert("Thank you, " + userName + "! Your message has been sent successfully.");

    contactForm.reset();
});