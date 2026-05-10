// скрол
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// кнопка вверх
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

    showOnScroll();
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// анімації
function showOnScroll() {
    document.querySelectorAll(".fade").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

// модалка
function openModal(text) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modalText").innerText = text;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// таймер
const launchDate = new Date("2030-01-01");

setInterval(() => {
    const now = new Date();
    const diff = launchDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("timer").innerText =
        days + " днів до місії";
}, 1000);

// форма
function sendForm(e) {
    e.preventDefault();
    alert("Повідомлення відправлено 🚀");
}