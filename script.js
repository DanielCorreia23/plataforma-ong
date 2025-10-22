function enviarFormulario() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const projeto = document.getElementById('projeto').value;
  const mensagem = document.getElementById('mensagem');

  if (nome && email && projeto) {
    mensagem.innerText = `✅ Obrigado, ${nome}! Seu cadastro para o projeto foi enviado com sucesso.`;
    mensagem.style.color = "green";
  } else {
    mensagem.innerText = `⚠️ Por favor, preencha todos os campos.`;
    mensagem.style.color = "red";
  }

  return false; // impede o recarregamento da página
}
