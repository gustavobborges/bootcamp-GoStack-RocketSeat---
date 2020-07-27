const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');


for (let card of cards) {
    card.addEventListener("click", function() {
        const pageId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src= `https://www.rocketseat.com.br/${pageId}`;

    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src=""
})

document.querySelector(".max-modal").addEventListener("click", function() {
    modalOverlay.classList.contains("maximize")
    modalOverlay.querySelector("iframe").src=""
})

