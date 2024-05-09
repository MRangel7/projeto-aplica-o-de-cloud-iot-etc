const cadastroButton = document.getElementById("cadastroButton2");

// Adiciona um listener para o evento de clique no botão
cadastroButton.addEventListener("click", function() {
  // Redireciona para a página desejada
  window.location.href = "/projeto/face/index.html";
});


function verificarCampos() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    var codigo = document.getElementById("codigo").value;

    if (nome != "" && email != "" && cpf != "" && codigo != "") {
        document.getElementById("cadastroButton2").disabled = false;
    } else {
        document.getElementById("cadastroButton2").disabled = true;
    }
}

// Adiciona um listener para o evento de mudança em cada campo de entrada
document.getElementById("nome").addEventListener("input", verificarCampos);
document.getElementById("email").addEventListener("input", verificarCampos);
document.getElementById("cpf").addEventListener("input", verificarCampos);
document.getElementById("codigo").addEventListener("input", verificarCampos);