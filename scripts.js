let imagem = document.querySelector(".carrao");
let circulo = document.querySelector(".circulo");
let linkVideo = "";

function trocarTudo(img, cor, video) {
    imagem.style.opacity = 0;
    setTimeout(() => {
        imagem.src = img;
        imagem.style.opacity = 1;
    }, 180);

    circulo.style.background = cor;

    // define o vídeo (agora com link COMPLETO)
    linkVideo = video;
}

function abrirVideo() {
    if (!linkVideo) {
        alert("Escolha um carro primeiro.");
        return;
    }
    window.open(linkVideo, "_blank", "noopener,noreferrer");
}
