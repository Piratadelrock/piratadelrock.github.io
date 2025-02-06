const slider = document.getElementById("pageControl");
const pageInfo = document.getElementById("pageInfo");

// Función para cambiar la página o contenido según el valor
slider.addEventListener("input", () => {
  const value = slider.value;
  pageInfo.textContent = `Página ${value}`;

  switch (value) {
    case "1":
      document.body.style.backgroundImage = "url('img/fondos/code.jpg')";
      // Ajuste de las props
      document.body.style.backgroundSize = "cover"; // Cubrir todo el fondo
      document.body.style.backgroundRepeat = "no-repeat"; // Evitar repetición
      document.body.style.backgroundPosition = "center"; // Centrar la imagen

      //   document.body.style.backgroundColor = "lightblue"; // Cambia el fondo como ejemplo
      break;
    case "2":
      document.body.style.backgroundColor = "lightgreen";
      break;
    case "3":
      document.body.style.backgroundColor = "lightblue";
      break;
    case "4":
      document.body.style.backgroundColor = "lightpink";
      break;
    case "5":
      //   document.body.style.backgroundColor = "lightgray";

      document.body.style.backgroundColor = "#CF2";
      break;
  }
});
