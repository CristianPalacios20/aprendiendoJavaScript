const nombre = document.getElementById('nombre');
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("enviar");
const resultado = document.querySelector(".resultado");

resultado.addEventListener('click', (e)=>{
    e.preventDefault();
    let error = validarCampos();
    if(error[0]){
        resultado.innerHTML = error[1];
        resultado.innerHTML = 
    }
})