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

  consoleContainer.addEventListener("click", () => {
    textarea.focus();
  });
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
