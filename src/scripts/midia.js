function changePage(page) {
  const content = document.getElementById('content');
  
  // Simula o carregamento de conteúdo dinâmico
  let newContent = '';
  if (page === 'home') {
    newContent = 'Bem-vindo à página inicial!';
  } else if (page === 'page1') {
    newContent = 'Conteúdo da Página 1.';
  } else if (page === 'page2') {
    newContent = 'Conteúdo da Página 2.';
  }

  content.innerHTML = `<p>${newContent}</p>`;
}