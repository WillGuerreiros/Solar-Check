const hamburguer = document.querySelector(".hamburguer");

const nav = document.querySelector(".barraNavegacao")

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));