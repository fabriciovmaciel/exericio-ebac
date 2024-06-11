let formulario = document.getElementById("formulario");
let numberA = document.getElementById("numero1");
let numberB = document.getElementById("numero2");
let errorMessage = document.getElementById("errorMessage");
const mensagemSucesso = document.getElementById("sucessMessage");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (numberB.value <= numberA.value) {
    errorMessage.style.display = "block";
    mensagemSucesso.style.display = "";
  } else {
    errorMessage.style.display = "none";
    mensagemSucesso.style.display = "block";
    errorMessage.style.display = "";
  }
});
