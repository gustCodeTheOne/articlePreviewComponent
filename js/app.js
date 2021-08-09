let iconShare = document.querySelector(".iconContainer");
let tooltip = document.querySelector(".tooltip");

iconShare.addEventListener('click', (e) => {
    e.preventDefault();
    tooltip.classList.toggle('active');
});
