var i = 0;
var images = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
var time = 1000;

function changeImg() {
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    i++;
    console.log(i);
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setInterval("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;
