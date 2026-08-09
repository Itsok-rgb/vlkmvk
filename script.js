// Confetti Burst Tool
document.getElementById('confettiBtn').addEventListener('click', () => {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff6b8b', '#ffd1dc', '#ffffff']
  });
});

// Heart Shower Tool
document.getElementById('heartsBtn').addEventListener('click', () => {
  const heartDefaults = {
    spread: 360,
    ticks: 100,
    gravity: 0.4,
    decay: 0.94,
    startVelocity: 15,
    shapes: ['star'],
    colors: ['#ff4770', '#ff6b8b']
  };

  confetti({ ...heartDefaults, particleCount: 30, scalar: 1.2 });
});

// Magic Wand Sparkles
document.getElementById('wandBtn').addEventListener('click', (e) => {
  for (let i = 0; i < 5; i++) {
    createSparkle(e.clientX, e.clientY);
  }
});

function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.innerText = '✨';
  sparkle.style.position = 'fixed';
  sparkle.style.left = `${x + (Math.random() * 60 - 30)}px`;
  sparkle.style.top = `${y + (Math.random() * 60 - 30)}px`;
  sparkle.style.fontSize = '1.5rem';
  sparkle.style.pointerEvents = 'none';
  sparkle.style.transition = 'all 1s ease-out';
  sparkle.style.zIndex = '99';
  
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.style.transform = 'translateY(-40px) scale(1.5)';
    sparkle.style.opacity = '0';
  }, 50);

  setTimeout(() => {
    sparkle.remove();
  }, 1050);
}

// Modal Toggle Functions
function openEnvelope(modalId) {
  document.getElementById(modalId).style.display = 'flex';
  
  // Trigger light confetti when opening a letter
  confetti({
    particleCount: 25,
    spread: 50,
    origin: { y: 0.5 }
  });
}

function closeEnvelope(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Close modal if user clicks outside of modal-content
window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let modal of modals) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
};
