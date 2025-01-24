// Obtener el botón de hamburguesa y la barra de navegación
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navBar");

// Agregar el evento de clic
hamburger.addEventListener("click", () => {
  // Alternar la clase 'active' en la barra de navegación
  navBar.classList.toggle("active");
});
