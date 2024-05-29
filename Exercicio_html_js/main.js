document.getElementById("formValida").addEventListener("submit", function (e) {
  e.preventDefault();

  let campoA = document.getElementById("campoA").value;
  let campoB = document.getElementById("campoB").value;
  let message = document.getElementById("message");

  if (campoB > campoA) {
    message.textContent = "Valido";
    message.className = "message positive";
  } else {
    message.textContent = "Invalido";
    message.className = "message netative";
  }
});
