// Espera o conteúdo da página carregar
document.addEventListener("DOMContentLoaded", function () {
    const botaoCurriculo = document.getElementById("curriculo-btn");

    botaoCurriculo.addEventListener("click", function () {
      // Redireciona para a página do currículo
      window.location.href = "curriculo.html";
    });
  });

  function voltarPagina() {
    // Verifica se há histórico de navegação
    if (window.history.length > 1) {
        window.history.back();
    } else {
        // Se não há histórico, redireciona para uma página específica
        // Substitua "index.html" pelo nome da sua página principal
        window.location.href = 'index.html';
    }
}

// Mostrar botão "voltar ao topo" só quando rolar
window.addEventListener("scroll", function () {
  const btnTopo = document.querySelector(".btn-topo");
  if (window.scrollY > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

// Função para voltar ao topo
function voltarTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}