const background = document.querySelector('.background');
let numStars = 1000;
let starsCreated = false;  // Flag to check if stars are already created

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

function handleFirstClick() {
  if (!starsCreated) {  // Only run if stars have not been created yet
    createStars();      // Create stars on first click
    window.addEventListener('resize', updateStars);  // Add resize event listener for responsive stars
    starsCreated = true;  // Set flag to true so stars won't be created again
  }
  document.body.removeEventListener('click', handleFirstClick);  // Remove this click event to prevent further triggering
}

// Add the event listener to body for the first click
document.body.addEventListener('click', handleFirstClick);
