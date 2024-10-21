const background = document.querySelector('.background');
let numStars = 1000;

function createStars() {
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${getRandomPosition(window.innerHeight)}px`;
    star.style.left = `${getRandomPosition(window.innerWidth)}px`;
    star.style.animationDelay = `${getRandomDelay()}s`;
    background.appendChild(star);
  }
}

function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

function getRandomDelay() {
  return Math.random() * 5;
}

function updateStars() {
  // Clear existing stars
  background.innerHTML = '';

  // Adjust numStars based on screen size
  if (window.innerWidth < 768) {
    numStars = 200;
  } else if (window.innerWidth < 1024) {
    numStars = 500;
  } else {
    numStars = 1000;
  }

  // Recreate stars
  createStars();
}

// Initial star creation
createStars();

// Handle window resize event
window.addEventListener('resize', () => {
  updateStars();
});
