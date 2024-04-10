const PATH_txt = "https://rhysalfshaw.com/KAScourfield/image_ids.txt";

let currentIndex = 1; // Current index of the displayed URL
let lines = []; // This will hold the lines from the fetched text file
let intervalId; // To hold the interval id for stopping later

// Function to update the iframe src attribute with a fade transition
function updateIframeSrc(index) {
    const iframe = document.getElementById("iframe");
    iframe.style.opacity = 0; // Fade out
    setTimeout(() => { // Delay for a short period to allow the fade out effect to be visible
        iframe.src = lines[index]; // Update the iframe source
        iframe.onload = () => {
            iframe.style.opacity = 1; // Fade in once the new content is loaded
        };
        updateCounter(currentIndex, lines.length); // Update the counter display
    }, 1000); // Adjust this delay to match the transition duration in CSS
}

fetch(PATH_txt)
    .then(response => response.text())
    .then(text => {
        lines = text.split(/\r?\n/); // Split the text into lines
        updateIframeSrc(currentIndex); // Initialize iframe with the first URL
        startAutoPlay(); // Start autoplay after fetching data
    })
    .catch(error => {
        console.error('Error fetching or processing the file:', error);
    });

// Function to start autoplay
function startAutoPlay() {
    intervalId = setInterval(incrementIndex, 20000); // Switch every 3 seconds
}

// Function to stop autoplay
function stopAutoPlay() {
    clearInterval(intervalId);
}

// Function to increment the index, wrapping if necessary
function incrementIndex() {
    currentIndex = (currentIndex + 1) % lines.length; // Wrap to 0 if at the end
    updateIframeSrc(currentIndex);
    updateCounter(currentIndex, lines.length);
}

// Function to decrement the index, wrapping if necessary
function decrementIndex() {
    if (currentIndex === 0) {
        currentIndex = lines.length - 1; // Wrap to the last index
    } else {
        currentIndex -= 1; // Move to the previous index
    }
    updateIframeSrc(currentIndex);
    updateCounter(currentIndex, lines.length);
}

// Function to update the counter display
function updateCounter(current, total) {
    const counterElement = document.getElementById("counter");
    counterElement.textContent = `${current} of ${total}`; // Display "X of Y" where X is the current index + 1, and Y is the total length
}

// Add click event listener to the "Previous" button
document.getElementById("prevBtn").addEventListener("click", () => {
    decrementIndex();
    stopAutoPlay(); // Stop autoplay when manually navigating
});

// Add click event listener to the "Next" button
document.getElementById("nextBtn").addEventListener("click", () => {
    incrementIndex();
    stopAutoPlay(); // Stop autoplay when manually navigating
});
