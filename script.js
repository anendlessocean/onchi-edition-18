// Onchi Edition XVIII - Interactive Digital Experience

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // --- AUDIO SYNTHESIZER (No external audio files needed!) ---
  let audioCtx = null;
  let isAmbientPlaying = false;
  let ambientOscillators = [];

  function initAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Crystalline celestial chime when birthday signal is triggered
  function playCelestialChime() {
    try {
      initAudio();
      const now = audioCtx.currentTime;
      // Frequencies for a shimmering E-major chord (E5, G#5, B5, E6, G#6)
      const freqs = [659.25, 830.61, 987.77, 1318.51, 1661.22];

      freqs.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.type = index % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now + index * 0.08);

        gain.gain.setValueAtTime(0, now + index * 0.08);
        gain.gain.linearRampToValueAtTime(0.08 / (index + 1), now + index * 0.08 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.08 + 2.5);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now + index * 0.08);
        osc.stop(now + index * 0.08 + 2.6);
      });
    } catch (e) {
      console.log('Audio chime not supported or allowed yet', e);
    }
  }

  // Ambient Peaceful Frequency for "Physics & Soul"
  function toggleAmbientAudio() {
    try {
      initAudio();
      const soundBtn = document.getElementById('ambient-sound-btn');
      const soundStatus = document.getElementById('sound-status');

      if (!isAmbientPlaying) {
        isAmbientPlaying = true;
        // Warm 432Hz ambient chord (Calm Variable frequency)
        const baseFreq = 216; // A3 harmonic
        const chord = [baseFreq, baseFreq * 1.5, baseFreq * 2, baseFreq * 2.5];
        
        chord.forEach(f => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.value = f;

          gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
          gain.gain.linearRampToValueAtTime(0.015, audioCtx.currentTime + 2);

          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();

          ambientOscillators.push({ osc, gain });
        });

        if (soundBtn) soundBtn.classList.add('text-amber-700', 'font-semibold');
        if (soundStatus) soundStatus.innerText = 'PLAYING';
      } else {
        isAmbientPlaying = false;
        ambientOscillators.forEach(({ osc, gain }) => {
          gain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 1);
          setTimeout(() => osc.stop(), 1000);
        });
        ambientOscillators = [];
        if (soundBtn) soundBtn.classList.remove('text-amber-700', 'font-semibold');
        if (soundStatus) soundStatus.innerText = 'CALM 432Hz';
      }
    } catch (e) {
      console.log('Ambient audio error', e);
    }
  }

  // Attach ambient button
  const ambientBtn = document.getElementById('ambient-sound-btn');
  if (ambientBtn) {
    ambientBtn.addEventListener('click', toggleAmbientAudio);
  }

  // --- CONFETTI BURST ---
  function fireCosmicConfetti() {
    playCelestialChime();

    if (typeof confetti === 'function') {
      // Golden editorial palette confetti
      const colors = ['#BC804C', '#D4A373', '#FAEDCD', '#CCD5AE', '#141413'];
      
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.65 },
        colors: colors,
        disableForReducedMotion: true
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 60,
          origin: { x: 0 },
          colors: colors
        });
      }, 200);

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 60,
          origin: { x: 1 },
          colors: colors
        });
      }, 400);
    }
  }

  // --- CELEBRATION MODAL ---
  const signalModal = document.getElementById('signal-modal');
  const openSignalBtns = document.querySelectorAll('.trigger-signal-btn');
  const closeSignalBtn = document.getElementById('close-signal-btn');
  const cosmicWishElem = document.getElementById('cosmic-wish-text');
  const nextWishBtn = document.getElementById('next-wish-btn');

  const cosmicWishes = [
    "May the gravitational pull of all your goals always exceed any external friction.",
    "In every exam hall, in every lecture, and in all of life: you are the constant that bends the room.",
    "Hakunamatata is not just a phrase; it is your verified thermodynamic state of equilibrium.",
    "May your 18th chapter have zero damping factors and maximum kinetic joy.",
    "PHY 105 was just a minor perturbation. You are an unstoppable force.",
    "Happy 18th Birthday, Onchi! Today the entire cosmos celebrates your frequency."
  ];

  let currentWishIdx = 0;

  function openModal() {
    fireCosmicConfetti();
    if (signalModal) {
      signalModal.classList.remove('hidden');
      signalModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (signalModal) {
      signalModal.classList.add('hidden');
      signalModal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }

  openSignalBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (closeSignalBtn) {
    closeSignalBtn.addEventListener('click', closeModal);
  }

  if (signalModal) {
    signalModal.addEventListener('click', (e) => {
      if (e.target === signalModal) closeModal();
    });
  }

  if (nextWishBtn && cosmicWishElem) {
    nextWishBtn.addEventListener('click', () => {
      currentWishIdx = (currentWishIdx + 1) % cosmicWishes.length;
      cosmicWishElem.style.opacity = '0';
      setTimeout(() => {
        cosmicWishElem.innerText = cosmicWishes[currentWishIdx];
        cosmicWishElem.style.opacity = '1';
      }, 200);
    });
  }

  // --- PHOTO LIGHTBOX ---
  const lightbox = document.getElementById('photo-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxMeta = document.getElementById('lightbox-meta');
  const closeLightboxBtn = document.getElementById('close-lightbox');

  const photoCards = document.querySelectorAll('[data-lightbox-src]');

  photoCards.forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-lightbox-src');
      const title = card.getAttribute('data-lightbox-title') || 'Archival Plate';
      const meta = card.getAttribute('data-lightbox-meta') || 'Onchi // Edition 18';

      if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        if (lightboxTitle) lightboxTitle.innerText = title;
        if (lightboxMeta) lightboxMeta.innerText = meta;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeLightboxBtn && lightbox) {
    closeLightboxBtn.addEventListener('click', () => {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      document.body.style.overflow = '';
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        document.body.style.overflow = '';
      }
    });
  }

  // --- INTERACTIVE METRIC CARD (6,574 DAYS) ---
  const daysCard = document.getElementById('stat-days-card');
  const daysValue = document.getElementById('stat-days-val');
  const daysLabel = document.getElementById('stat-days-lbl');

  if (daysCard && daysValue && daysLabel) {
    const states = [
      { val: "6,574", lbl: "Days of unyielding grace" },
      { val: "157,776", lbl: "Hours of quiet brilliance" },
      { val: "9.46 × 10⁶", lbl: "Minutes of unmistakable poise" },
      { val: "5.68 × 10⁸", lbl: "Seconds into adulthood" }
    ];
    let stateIdx = 0;

    daysCard.style.cursor = 'pointer';
    daysCard.addEventListener('click', () => {
      stateIdx = (stateIdx + 1) % states.length;
      daysValue.innerText = states[stateIdx].val;
      daysLabel.innerText = states[stateIdx].lbl;
      playSoftTick();
    });
  }

  function playSoftTick() {
    try {
      initAudio();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch (e) {}
  }

  // --- CODEX CARDS INTERACTION ---
  const codexCards = document.querySelectorAll('.codex-card');
  codexCards.forEach(card => {
    card.addEventListener('click', () => {
      const details = card.querySelector('.codex-details');
      if (details) {
        details.classList.toggle('hidden');
      }
    });
  });

  // Keyboard escape to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      if (lightbox) {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        document.body.style.overflow = '';
      }
    }
  });
});
