
fetch('./config.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('titulo').innerText = data.titulo;
  })
  .catch(error => console.error('Erro ao carregar JSON:', error));
