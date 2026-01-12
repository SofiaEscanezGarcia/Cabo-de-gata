const tarjetas = document.querySelectorAll(".tarjeta-click");

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        tarjeta.classList.toggle("activa");
    });
});

const botonesInfo = document.querySelectorAll(".btn-info");

botonesInfo.forEach(boton => {
    boton.addEventListener("click", event => {
        event.stopPropagation();
    });
});
