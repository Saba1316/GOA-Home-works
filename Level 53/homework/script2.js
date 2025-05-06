// Get the image and button elements by their IDs
const image = document.getElementById("myImage");
const button = document.getElementById("resizeButton");


button.addEventListener("click", function() {
  
  image.style.width = "400px";  
  image.style.height = "300px"; 
});
