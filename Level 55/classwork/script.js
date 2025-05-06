const from = document.getElementById("form");
const submit = document.getElementById("submit");

submit.addEventListener('click', function(e){
    e.preventDefault();
    
    console.log(form.elements.name.value);
});