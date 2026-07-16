// ===== CONTAGEM REGRESSIVA =====
const weddingDate = new Date("2026-12-05T16:00:00");

function atualizarContador() {
    const agora = new Date();
    const diferenca = weddingDate - agora;

    if (diferenca <= 0) {
        document.getElementById("countdown").innerHTML =
            "<h2 style='font-family:Alex Brush,cursive;font-size:42px;color:#fff;text-shadow:0 3px 15px rgba(60,40,25,.25)'>Hoje é o grande dia!</h2>";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(dias).padStart(2, "0");
    document.getElementById("hours").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutos).padStart(2, "0");
    document.getElementById("seconds").textContent = String(segundos).padStart(2, "0");
}

atualizarContador();
setInterval(atualizarContador, 1000);

// ===== NAV SCROLL =====
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 80);
});

// ===== REVEAL ON SCROLL =====
(function initReveal() {
    const targets = document.querySelectorAll(
        ".historia-item, .evento-card, .galeria-item, .rsvp-form, section > p"
    );
    targets.forEach(el => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
})();

// ===== RSVP FORM =====
const form = document.getElementById("rsvpForm");
const sucesso = document.getElementById("rsvpSucesso");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const btn = form.querySelector(".botao");
        const original = btn.textContent;
        btn.textContent = "Enviando...";
        btn.disabled = true;
        btn.style.opacity = "0.7";

        setTimeout(() => {
            form.style.display = "none";
            sucesso.classList.add("show");
            btn.textContent = original;
            btn.disabled = false;
            btn.style.opacity = "1";
        }, 1500);
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
