const form = document.getElementById("form-deposito");

function validaNome(nomeCompleto) {
  const nomeComoArrey = nomeCompleto.split(" ");
  return nomeComoArrey.length >= 2;
}

form.addEventListener("submit", function (e) {
  let fomrEValido = false;
  e.preventDefault();

  const nomeBeneficiario = document.getElementById("nome-beneficiario");
  const numeroContaBeneficiario = document.getElementById("numero-conta");
  const valorDeposito = document.getElementById("valor-deposito");
  const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta ${numeroContaBeneficiario.value}`;

  fomrEValido = validaNome(nomeBeneficiario.value);
  if (fomrEValido) {
    alert(mensagemSucesso);

    nomeBeneficiario.value = "";
    numeroContaBeneficiario.value = "";
    valoDeposito.value = "";
  } else {
    alert("O nome nao esta completo");
  }
});

console.log(form);
