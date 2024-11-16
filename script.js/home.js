const menuButton = document.getElementById('button-menu');
const menu = document.getElementById('menuShow');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('opacity-0');
});

// Close the menu if clicking outside of it
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.classList.add('hidden');
        menu.classList.add('opacity-0');
    }
});