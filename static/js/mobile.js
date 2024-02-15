
document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        sidebar.classList.toggle('is-active');
    });
});