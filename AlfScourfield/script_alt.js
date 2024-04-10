const PATH_txt = "https://rhysalfshaw.com/AlfScourfield/image_links.txt";
let currentIndex = 1;
let lines = [];
let intervalId;

// Function to update the iframe src attribute with a fade transition
function updateIframeSrc(index) {
  const iframe = document.getElementById("img");
  iframe.style.opacity = 0;

  setTimeout(() => {
    iframe.src = lines[index];
    iframe.onload = () => {
      iframe.style.opacity = 1;
    };
    updateCounter(currentIndex, lines.length);
  }, 100);
}

fetch(PATH_txt)
  .then((response) => response.text())
  .then((text) => {
    lines = text.split(/\r?\n/);
    updateIframeSrc(currentIndex);
    startAutoPlay();
  })
  .catch((error) => {
    console.error('Error fetching or processing the file:', error);
  });

// Function to start autoplay
function startAutoPlay() {
  intervalId = setInterval(incrementIndex, 20000);
}

// Function to stop autoplay
function stopAutoPlay() {
  clearInterval(intervalId);
}

// Function to increment the index, wrapping if necessary
function incrementIndex() {
  currentIndex = (currentIndex + 1) % lines.length;
  updateIframeSrc(currentIndex);
  updateCounter(currentIndex, lines.length);
}

// Function to decrement the index, wrapping if necessary
function decrementIndex() {
  if (currentIndex === 0) {
    currentIndex = lines.length - 1;
  } else {
    currentIndex -= 1;
  }
  updateIframeSrc(currentIndex);
  updateCounter(currentIndex, lines.length);
  
}

// Function to update the counter display
function updateCounter(current, total) {
  const counterElement = document.getElementById("counter");
  counterElement.textContent = `${current} of ${total}`;
}

// Add click event listener to the "Previous" button
document.getElementById("prevBtn").addEventListener("click", () => {
  decrementIndex();
  stopAutoPlay();
  startAutoPlay(); // Restart the autoplay timer
});

// Add click event listener to the "Next" button
document.getElementById("nextBtn").addEventListener("click", () => {
  incrementIndex();
  stopAutoPlay();
  startAutoPlay(); // Restart the autoplay timer
});