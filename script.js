// ======================
// Floor Navigation
// ======================
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;

    document.querySelectorAll('.panel').forEach(p => {
      if (p.id === target) {
        p.classList.add('active');
        p.setAttribute('aria-hidden', 'false');
        p.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        p.classList.remove('active');
        p.setAttribute('aria-hidden', 'true');
      }
    });

    // Hide prolog when any panel opens
    document.getElementById('prolog').style.display = 'none';
  });
});

// ======================
// Keyboard Accessibility
// ======================
document.querySelectorAll('.btn').forEach((b) => {
  b.tabIndex = 0;
  b.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') b.click();
  });
});

// ======================
// Audio Control (optional)
// ======================
let currentAudio = null;

document.querySelectorAll('audio').forEach(audio => {
  audio.addEventListener('play', () => {
    // Stop currently playing audio
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = audio;
  });
});
