const nombre = document.getElementById('nombre');
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener('click', (e)=>{
    e.preventDefault();
    let error = validarCampos();
    if(error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add('rojo')
        resultado.classList.remove('verde');
        
    }else{
        resultado.innerHTML = 'Solicitud enviada';
        resultado.classList.add('verde');
    }
});

const validarCampos = ()=>{
    let error = [];
    if(nombre.value.length < 5 || nombre.value.length > 40){
        error[0] = true;
        error[1] = resultado.innerHTML = 'El nombre no es válido';
        return error;
    }else if(email.value.length < 4 ||
            email.value.indexOf('@') == -1 ||
            email.value.indexOf('.') == -1){

        error[0] = true;
        error[1] = resultado.innerHTML = 'El email no es válido';
        return error;

    }
        error[0] = false;
        return error;
    

}