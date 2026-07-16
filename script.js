// Data do casamento
const weddingDate = new Date("2026-12-05T16:00:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca = weddingDate - agora;

    if (diferenca <= 0) {

        document.getElementById("countdown").innerHTML =
            "<h2>💍 Hoje é o grande dia! 💍</h2>";

        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferenca % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferenca % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(segundos).padStart(2, "0");
}

atualizarContador();

setInterval(atualizarContador, 1000);
