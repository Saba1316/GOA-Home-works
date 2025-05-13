const myP = document.getElementById("myp");
const myBtn = document.getElementById("mybtn");

function changeColor(){
    myP.textContent = "My color is Red.";
    myP.style.color = "red";
}

myBtn.onclick = changeColor;