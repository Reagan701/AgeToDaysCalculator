let age = document.getElementById("Age");
let result = document.getElementById("Result");
let button = document.getElementById("Submit");

button.addEventListener('click', () =>{
    result.innerHTML = age.value * 365;
});
