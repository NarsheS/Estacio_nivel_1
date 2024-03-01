document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("e-mail").value;
  var subject = `Novo cadastro: ${document.getElementById("nome").value}`;

  var endereco = `
  CEP: ${document.getElementById("cep").value} \n
  Rua: ${document.getElementById("rua").value} \n
  N°: ${document.getElementById("numero").value} \n
  complemento: ${document.getElementById("complemento").value 
  ? document.getElementById("complemento").value 
  : "Sem complemento"}`;

  var regiao = `
  Cidade: ${document.getElementById("cidade").value}                     UF: ${document.getElementById("uf").value}`;

  var comment = `DADOS DE INSCRIÇÃO \n
  ${endereco} \n
  ${regiao} \n\n\n\n`;

  var body = `Email: ${email} \n\n ${comment}`;
  var url = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.location.href = url;
});