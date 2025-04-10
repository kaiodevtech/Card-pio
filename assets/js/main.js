
    const audioBtn = document.getElementById('audioBtn');
    const bgAudio = document.getElementById('bgAudio');
    
    
  audioBtn.addEventListener('click', () => {
    if (bgAudio.paused) {
        bgAudio.play();
    audioBtn.innerHTML = '⏸️ Pausar Som';
    } else {
        bgAudio.pause();
    audioBtn.innerHTML = '▶️ Retomar Som';
    }
  });
  
const nome = document.getElementById('cliente').value;
const telefone = document.getElementById('telefone').value;
const email = document.getElementById('email').value;

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  if (nome && telefone && email) {
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
  } else {
    alert('Por favor, preencha os campos obrigatórios (*)');
  }
});