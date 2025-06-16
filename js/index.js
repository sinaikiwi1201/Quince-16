function toggleEvento(id) {
  const contenido = document.getElementById(`evento-${id}`)
  const addShow = !contenido.classList.contains("show");

  for (let i = 1; i <= 3; i++) {
    const element = document.getElementById(`evento-${i}`);
    element.classList.remove("show");
  }
  
  if (addShow) contenido.classList.toggle("show");

  const contenidoMobile = document.getElementById(`evento-mobile-${id}`)
  contenidoMobile.classList.toggle("show");
}
