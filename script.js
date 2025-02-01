// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Get elements
  const openingScreen = document.getElementById('opening-screen');
  const pictureScreen = document.getElementById('picture-screen');
  const proposalScreen = document.getElementById('proposal-screen');
  const celebrationScreen = document.getElementById('celebration-screen');
  const yesButton = document.getElementById('yes-button');
  const noButton = document.getElementById('no-button');
  const nextButtons = document.querySelectorAll('.next-button');
  const backgroundMusic = document.getElementById('background-music');

  // Unlock audio on user interaction
  document.addEventListener('click', () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    }
  });

  // Add event listeners for "Next" buttons
  nextButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (!openingScreen.classList.contains('hidden')) {
        // Move from Opening Screen to Picture Screen
        openingScreen.classList.add('hidden');
        pictureScreen.classList.remove('hidden');
      } else if (!pictureScreen.classList.contains('hidden')) {
        // Move from Picture Screen to Proposal Screen
        pictureScreen.classList.add('hidden');
        proposalScreen.classList.remove('hidden');
      }
    });
  });

  // Handle 'Yes' button click
  yesButton.addEventListener('click', () => {
    proposalScreen.classList.add('hidden');
    celebrationScreen.classList.remove('hidden');
    triggerConfetti();
  });

  // Handle 'No' button click
  noButton.addEventListener('click', () => {
    alert('Try again! You know you want to say yes!');
  });

  // Confetti effect
  function triggerConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
});