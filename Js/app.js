// Hamburger menu Button

const hamburger = document.querySelector('.hamburger');
// Event Listener
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
});
// Thats it for Js

// Hamburger Button Logic

const HamBtn = document.getElementById('HamBtn');
console.log(HamBtn);
// Click Listener
HamBtn.addEventListener('click', () => {
    const section = document.getElementById('section');
    section.classList.toggle('hide');

    if (section.classList.contains('hide')) {
        // It already had the Hidden class
        document.getElementById('HamNav').classList.remove('hide');
    } else {
        document.getElementById('HamNav').classList.add('hide');
    }
});
