// Get the image and button elements by their IDs
const image = document.getElementById("myImage");
const button = document.getElementById("changeImageButton");


button.addEventListener("click", function() {
  
  image.src = "https://via.placeholder.com/400"; 
});
