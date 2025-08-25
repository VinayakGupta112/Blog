// script.js
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'dark-mode-toggle';
    darkModeToggle.innerText = 'Toggle Dark Mode';
    document.querySelector('header').appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
