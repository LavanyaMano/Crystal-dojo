// script.js

// JavaScript to toggle the menu on smaller screens
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});

// script.js

function showModal(crystalName, description) {
    const modal = document.getElementById('crystal-modal');
    const modalTitle = document.querySelector('.modal-content h2');
    const descriptionElement = document.getElementById('crystal-description');

    modalTitle.textContent = crystalName;
    descriptionElement.textContent = description;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('crystal-modal');
    modal.style.display = 'none';
}

window.addEventListener('click', function (event) {
    const modal = document.getElementById('crystal-modal');
    if (event.target == modal) {
        closeModal();
    }
});
