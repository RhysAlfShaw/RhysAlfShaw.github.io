let currentIndex = 0; // Initialize the current index to 0
let imagePaths = ['png_photos/PXL_20240409_164548625.MP.jpg',
'png_photos/IMG_4528.jpg',
'png_photos/PXL_20240409_164544027.MP.jpg',
'png_photos/IMG-20230408-WA0002.jpg',
'png_photos/PXL_20240409_165756247.jpg',
'png_photos/PXL_20240409_165310783.jpg',
'png_photos/PXL_20240409_164443487.jpg',
'png_photos/IMG_0376.jpg',
'png_photos/IMG_5781.jpg',
'png_photos/IMG_4448.jpg',
'png_photos/PXL_20240409_164420492.jpg',
'png_photos/IMG_6289.jpg',
'png_photos/IMG_5780.jpg',
'png_photos/IMG_8065.jpg',
'png_photos/IMG_2206.jpg',
'png_photos/PXL_20240409_164432257.jpg',
'png_photos/PXL_20240409_164425850.jpg',
'png_photos/IMG_1445.jpg',
'png_photos/PXL_20240409_165834594.jpg',
'png_photos/PXL_20240409_164202091.jpg',
'png_photos/PXL_20240409_164207857.jpg',
'png_photos/IMG_3907.jpg',
'png_photos/IMG_6658.jpg',
'png_photos/PXL_20240409_171015713.MP.jpg',
'png_photos/PXL_20240409_163937065.jpg',
'png_photos/PXL_20240409_165037542.jpg',
'png_photos/PXL_20240409_163757820.jpg',
'png_photos/PXL_20240409_163658534.jpg',
'png_photos/PXL_20240409_164947097.jpg',
'png_photos/PXL_20240409_165017863.jpg',
'png_photos/PXL_20240409_165111194.jpg',
'png_photos/IMG_1446.jpg',
'png_photos/IMG_3292.jpg',
'png_photos/PXL_20240409_164748568.MP.jpg',
'png_photos/5a1dd6c7-6b59-4878-a2b2-23a8a18b0bc0.jpg',
'png_photos/a1868c7e-33c9-46bb-a05a-7d74c6f912dd.jpg',
'png_photos/IMG_8102.jpg',
'png_photos/PXL_20240409_164522268.MP.jpg',
'png_photos/PXL_20240409_163725069.jpg',
'png_photos/PXL_20240409_165358348.MP.jpg',
'png_photos/PXL_20240409_164100203.jpg',
'png_photos/PXL_20240409_164652905.jpg',
'png_photos/PXL_20240409_165408018.jpg',
'png_photos/PXL_20240409_164614004.jpg',
'png_photos/PXL_20240409_164030128.jpg',
'png_photos/PXL_20240409_165153473.MP.jpg',
'png_photos/IMG_6660.jpg',
'png_photos/PXL_20240409_164836723.jpg',
'png_photos/PXL_20240409_164940845.jpg',
'png_photos/IMG_1443.jpg',
'png_photos/IMG_6851.jpg',
'png_photos/PXL_20240409_165201890.jpg',
'png_photos/IMG_8061.jpg',
'png_photos/PXL_20240409_164536790.jpg',
'png_photos/PXL_20240409_164629146.jpg',
'png_photos/PXL_20240409_165011018.jpg',
'png_photos/IMG_9196.jpg',
'png_photos/IMG_3322.jpg',
'png_photos/PXL_20240409_164120107.jpg',
'png_photos/IMG_3323.jpg',
'png_photos/IMG_6298.jpg',
'png_photos/PXL_20240409_163921370.jpg',
'png_photos/PXL_20240409_163901249.jpg',
'png_photos/PXL_20240409_165056622.jpg',
'png_photos/PXL_20240409_165043398.jpg',
'png_photos/IMG_6850.jpg',
'png_photos/PXL_20240409_163711912.jpg',
'png_photos/PXL_20240409_163618945.jpg',
'png_photos/IMG_0739.jpg',
'png_photos/IMG_0507.jpg',
'png_photos/IMG_2310.jpg',
'png_photos/PXL_20240409_164133874.jpg',
'png_photos/PXL_20240409_164622511.jpg',
'png_photos/IMG_5047.jpg',
'png_photos/IMG_3344.jpg',
'png_photos/IMG_3345.jpg',
'png_photos/PXL_20240409_164113569.jpg',
'png_photos/PXL_20240409_164248066.jpg',
'png_photos/IMG_3635.jpg',
'png_photos/PXL_20240409_163950074.jpg',
'png_photos/IMG_5865.jpg',
'png_photos/PXL_20240409_164646944.MP.jpg',
'png_photos/IMG_2313.jpg',
'png_photos/PXL_20240409_164103530.MP.jpg',
'png_photos/IMG_3637.jpg',
'png_photos/PXL_20240409_165032840.jpg',
'png_photos/IMG_5050.jpg',
'png_photos/IMG_3385.jpg',
'png_photos/PXL_20240409_164052278.jpg',
'png_photos/PXL_20240409_164156220.jpg',
'png_photos/PXL_20240409_164754644.jpg',
'png_photos/PXL_20240409_163751604.jpg',
'png_photos/PXL_20240409_163742678.jpg',
'png_photos/IMG_5864.jpg',
'png_photos/IMG_0918.jpg',
'png_photos/IMG-20240409-WA0008(2).jpg',
'png_photos/IMG_3632.jpg',
'png_photos/PXL_20240409_164219945.jpg',
'png_photos/IMG_3342.jpg',
'png_photos/PXL_20240409_163846374.jpg',
'png_photos/IMG_3343.jpg',
'png_photos/IMG-20240409-WA0009.jpg',
'png_photos/6e473934-069c-41b9-8a6c-47007ecb7cdc.jpg',
'png_photos/PXL_20240409_165932419.jpg',
'png_photos/IMG_3021.jpg',
'png_photos/PXL_20240409_165003092.jpg',
'png_photos/PXL_20240409_165709527.jpg',
'png_photos/IMG_3590.jpg',
'png_photos/PXL_20240409_164233858.MP.jpg',
'png_photos/PXL_20240409_163645689.jpg',
'png_photos/PXL_20240409_170009092.jpg',
'png_photos/IMG_0264.jpg',
'png_photos/PXL_20240409_165632232.MP.jpg',
'png_photos/IMG_2513.jpg',
'png_photos/PXL_20240409_164437898.MP.jpg',
'png_photos/PXL_20240409_164213270.jpg',
'png_photos/PXL_20240409_165729768.jpg',
'png_photos/IMG_3340.jpg',
'png_photos/PXL_20240409_165926043.jpg',
'png_photos/PXL_20240409_165948942.jpg',
'png_photos/PXL_20240409_164413980.jpg',
'png_photos/PXL_20240409_163705680.jpg',
'png_photos/IMG_0311.jpg',
'png_photos/PXL_20240409_165331845.jpg',
'png_photos/PXL_20240409_165327103.MP.jpg',
'png_photos/PXL_20240409_170002461.jpg',
'png_photos/IMG_2664.jpg',
'png_photos/PXL_20240409_163737034.jpg',
'png_photos/IMG_3588.jpg',
'png_photos/IMG_1002.jpg',
'png_photos/PXL_20240409_165146885.jpg',
'png_photos/IMG-20240409-WA0007.jpg',
'png_photos/IMG_6235.jpg',
'png_photos/IMG-20240409-WA0006.jpg',
'png_photos/PXL_20240409_164408176.jpg',
'png_photos/IMG_3628.jpg',
'png_photos/PXL_20240409_164810373.jpg',
'png_photos/IMG_0269.jpg',
'png_photos/PXL_20240409_165048711.jpg',
'png_photos/IMG_3589.jpg',
'png_photos/PXL_20240409_164255606.jpg',
'png_photos/PXL_20240409_165304827.jpg',
'png_photos/PXL_20240409_165541649.jpg',
'png_photos/IMG_3164.jpg',
'png_photos/IMG_2508.jpg',
'png_photos/IMG-20240409-WA0004.jpg',
'png_photos/IMG-20240409-WA0010.jpg',
'png_photos/PXL_20240409_164140853.jpg',
'png_photos/PXL_20240409_164638807.MP.jpg',
'png_photos/IMG-20240409-WA0005.jpg',
'png_photos/PXL_20240409_164955610.jpg',
'png_photos/PXL_20240409_163730797.jpg',
'png_photos/PXL_20240409_164802686.MP.jpg',
'png_photos/PXL_20240409_165548293.jpg',
'png_photos/PXL_20240409_165651752.jpg',
'png_photos/21645078-e90c-4439-b733-42076eba56b4.jpg',
'png_photos/PXL_20240409_164935123.jpg',
'png_photos/PXL_20240409_165532852.jpg',
'png_photos/PXL_20240409_164602396.jpg',
'png_photos/PXL_20240409_165556641.jpg',
'png_photos/unnamed.jpg',
'png_photos/IMG_8753.jpg',
'png_photos/PXL_20240409_165347098.jpg',
'png_photos/PXL_20240409_164845572.jpg',
'png_photos/PXL_20240409_165315872.jpg',
'png_photos/PXL_20240409_164453202.jpg',
'png_photos/PXL_20240409_171813025.jpg',
'png_photos/PXL_20240409_165216189.jpg',
'png_photos/IMG_0090.jpg',
'png_photos/PXL_20240409_164829125.jpg',
'png_photos/IMG_3162.jpg',
'png_photos/PXL_20240409_164906059.jpg',
'png_photos/IMG-20240409-WA0002.jpg',
'png_photos/PXL_20240409_163908945.jpg',
'png_photos/IMG_0127.jpg',
'png_photos/IMG_6225.jpg',
'png_photos/PXL_20240409_164552719.jpg',
'png_photos/PXL_20240409_164823541.jpg',
'png_photos/IMG-20240409-WA0003.jpg',
'png_photos/PXL_20240409_163930834.jpg',
'png_photos/IMG_7098.jpg',
'png_photos/PXL_20240409_164240967.jpg',
'png_photos/IMG_3851.jpg',
'png_photos/IMG_9398.jpg',
'png_photos/PXL_20240409_165521693.jpg',
'png_photos/IMG_4496.jpg',
'png_photos/PXL_20240409_123856822.jpg',
'png_photos/IMG_0430.jpg',
'png_photos/IMG_9414.jpg',
'png_photos/PXL_20240409_164011923.jpg',
'png_photos/PXL_20240409_165104785.jpg',
'png_photos/PXL_20240409_164224263.jpg',
'png_photos/PXL_20240409_163632121.jpg',
'png_photos/PXL_20240409_164147825.MP.jpg',
'png_photos/PXL_20240409_164003869.jpg',
'png_photos/IMG_0778.jpg',
'png_photos/PXL_20240409_164126640.MP.jpg',
'png_photos/PXL_20240409_164817535.jpg',
'png_photos/PXL_20240409_165452952.MP.jpg',
'png_photos/IMG_3852.jpg',
'png_photos/IMG_8734.jpg',
'png_photos/IMG_3338.jpg',
'png_photos/PXL_20240409_163639129.jpg',
'png_photos/PXL_20240409_164300835.MP.jpg',
'png_photos/IMG_3853.jpg',
'png_photos/IMG_0779.jpg',
'png_photos/PXL_20240409_165513800.jpg',
'png_photos/IMG-20200817-WA0000.jpg',
'png_photos/PXL_20240409_163943500.jpg',
'png_photos/PXL_20240409_163717776.jpg',
'png_photos/IMG_3856.jpg',
'png_photos/IMG_8081.jpg',
'png_photos/PXL_20240409_163652362.jpg',
'png_photos/IMG_6443.jpg',
'png_photos/PXL_20240409_165322515.jpg',
'png_photos/IMG_3288.jpg',
'png_photos/PXL_20240409_165023882.jpg',
'png_photos/PXL_20240409_165526660.jpg',
'png_photos/IMG_8068.jpg',
'png_photos/IMG_6284.jpg',
'png_photos/PXL_20240409_164854026.jpg',
'png_photos/IMG_4450.jpg',
'png_photos/PXL_20240409_165641277.MP.jpg',
'png_photos/PXL_20240409_164922199.jpg',
'png_photos/PXL_20240409_165208704.jpg',
'png_photos/IMG_3855.jpg',
'png_photos/PXL_20240409_165719401.jpg',
'png_photos/PXL_20240409_164228689.jpg',
'png_photos/IMG_6695.jpg',
'png_photos/IMG_0743.jpg',
'png_photos/PXL_20240409_165740831.jpg',
'png_photos/IMG_0031.jpg',
'png_photos/IMG_3289.jpg',
'png_photos/IMG_5808.jpg]']; // Array to store the list of image file paths
let intervalId; // Variable to store the interval ID for autoplay'

// Function to update the iframe src attribute with a fade transition
function updateIframeSrc(index) {
  const iframe = document.getElementById("img");
  
  setTimeout(() => {
    iframe.src = imagePaths[index];
    
    updateCounter(currentIndex, imagePaths.length);
  }, 100);
}
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
  currentIndex = (currentIndex + 1) % imagePaths.length;
  updateIframeSrc(currentIndex);
}

// Function to decrement the index, wrapping if necessary
function decrementIndex() {
  if (currentIndex === 0) {
    currentIndex = imagePaths.length - 1;
  } else {
    currentIndex -= 1;
  }
  updateIframeSrc(currentIndex);
}

// Function to update the counter display
function updateCounter(current, total) {
  const counterElement = document.getElementById("counter");
  counterElement.textContent = `${current + 1} of ${total}`;
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