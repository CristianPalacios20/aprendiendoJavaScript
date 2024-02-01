const nombre = document.getElementById('nombre');
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener('click', (e)=>{
    e.preventDefault();
    let error = validarCampos();
    if(error[0]){
        resultado.innerHTLM = error[1];
        resultado.classList.add('rojo')
    }else{
        resultado.innerHTML = 'Solicitud enviada';
        resultado.classList.add('verde')
    }
});

const validarCampos=()=>{
    let error = [];
    if(nombre.value.length < 5){
        error[0] = true;
        error[1] = 'El nombre debe de teber más de 4 caracteres';
        return error;
    }else if(nombre.value.length > 40){
        error[0] = true;
        error[1] = 'El nombre no puede tener más de 40 caracteres';
        return error;
    }
    error[0]=false;
    return error;
}