var par = false;
function parpadeo() {
  col = par ? "#33FF33" : "black";
  document.getElementById("txt").style.color = col;
  par = !par;
  setTimeout("parpadeo()", 300); //500 = medio segundo
}
window.onload = parpadeo;

function goBack() {
  window.history.back();
}

// toma de datos en la consola
// document
//   .getElementById("console")
//   .addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//       event.preventDefault(); // Evita el salto de línea

//       let command = this.value.trim().toLowerCase(); // Captura el texto y lo pasa a minúsculas

//       if (command === "login") {
//         window.location.href = "login.html"; // Redirige a otra página
//       } else if (command === "home") {
//         window.location.href = "views/pages/home.html";
//       } else {
//         document.getElementById("output").innerText =
//           "Comando no reconocido: " + command;
//       }

//       this.value = ""; // Limpia la consola después de escribir
//     }
//   });

document.addEventListener("DOMContentLoaded", function () {
  let textarea = document.getElementById("console");
  let output = document.getElementById("output");
  let commands = document.getElementById("commands");
  const consoleContainer = document.querySelector(".console-container");

  let cursor = document.querySelector(".cursor");

  //con esta funcion hacemos que se mantenga el foo en el contenedor del text area para los celulares. al hacer tap
  // consoleContainer.addEventListener("click", () => {
  //   textarea.focus();
  // });
  // Mantener foco en el textarea para que siempre capture input
  document.addEventListener("keydown", function () {
    textarea.focus();
  });

  textarea.addEventListener("input", function () {
    output.textContent = textarea.value; // Muestra el texto en la "consola"
  });

  textarea.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita salto de línea

      let command = textarea.value.trim().toLowerCase();

      if (command === "home" || command === "portafolio") {
        window.location.href = "views/pages/home.html"; // Redirige si el usuario escribe "home"
      } else if (command === "insta" || command === "instagram") {
        window.location.href = "https://instagram.com/emmanueljose96"; // Redirige si el usuario escribe "home"
      } else if (command === "email") {
        window.location.href = "mailto:ejrocko@example.com";
      } else if (command === "clear") {
        window.location.href = "index.html";
      } else if (command === "help" || command === "commands") {
        commands.innerText = "Commands: home, insta/instagram, email (contact)";
      } else if (command === "info") {
        output.innerHTML +=
          "<br> SOY UN PROFESIONAL DE DESARROLLO HE LABORADO Y SIGO ESTUDIANDO CONSTANTEMENTE EN ESTE MUNDO INFORMATICO";
      } else {
        output.innerHTML += "<br>root@server:~$ "; // Nueva línea en la "terminal"
        textarea.value = ""; // Borra el input
        // document.getElementById("output").innerText =
        //   "Command is not recognized: " + command;
      }
    }
  });
  // Mantener el cursor siempre al final
  // setInterval(() => {
  //   output.appendChild(cursor);
  // }, 1000);

  // 1 seg es 1000 milisegundos
  setInterval(() => {
    commands.innerHTML = "Write ´Help´ command";
  }, 4000);
});

// ANIMACION DEL FONDO DE LA CONSOLA
const c = document.getElementById("bg-canvas");
const ctx = c.getContext("2d");

let w, h, pixels;

function resize() {
  w = c.width = window.innerWidth;
  h = c.height = window.innerHeight;
  pixels = new Array(w * h).fill(0);
}

resize();
window.addEventListener("resize", resize);

function draw() {
  const imgData = ctx.createImageData(w, h);
  const data = imgData.data;

  for (let i = 0; i < pixels.length; i++) {
    const val = Math.floor(20 + 30 * Math.sin(i / 200 + Date.now() / 1000));
    data[i * 4 + 0] = val; // R
    data[i * 4 + 1] = val; // G
    data[i * 4 + 2] = val; // B
    data[i * 4 + 3] = 255; // A
  }

  ctx.putImageData(imgData, 0, 0);
  requestAnimationFrame(draw);
}

draw();

// especificaciones

//  <tr>
//   <td>
//   <a class="link" onclick="goBack()">
//     <<span id="txt">_</span>Atras.js
//   </a>
// </td>
// </tr>
// <tr>
// <td>
//   <a class="link" onclick="history.back(-1)">
//     <<span id="txt">_</span>Atras.history.back(-1)
//   </a>
// </td>
// </tr> -->
// <!--
// <aside>
// <h2>Clonando: </h2>
// <a href="../clone/netflix.html">
//   <span id="netflix">Netflix</span>
// </a>
// </aside>

// <h2>TABLA DE ESPECIFICACIONES</h2>
// <table border="1">
// <tr>
//   <th class="superior"><strong>MODELO</strong></th>
//   <td class="superior"><strong>PROCESADOR</strong></td>
//   <td class="superior"><strong>RAM</strong></td>
//   <td class="superior"><strong>HDD/SSD</strong></td>
//   <td class="superior"><strong>GPU</strong></td>
//   <td class="superior"><strong>PANTALLA</strong></td>
//   <td class="superior"><strong>PRECIO</strong></td>
// </tr>
// <tbody>
//   <th> ASUS TUF GAMING </th>
//   <td>Procesador Intel® Core™ i5-10300H; 2,5 GHz (caché de 8M; hasta 4,5 GHz, 4 núcleos)</td>
//   <td>8GB DDR4 SO-DIMM(2933MHz for i5-10300H/i7-10750H/i7-10870H), 32GB</td>
//   <td>SSD de 512 GB M.2 NVMe™ PCIe® 3.0</td>
//   <td>NVIDIA® GeForce® GTX 1650 Ti, GDDR6 de 4 GB</td>
//   <td> 15,6 pulgadas, FHD (1920 × 1080) 16:9, anti-glare display, 62.5%, 47.1%, 144 Hz, Valor de nivel
//     IPS,Optimus</td>
//   <td>2.390.000</td>
// </tbody>
// </table>

// </table>
