const nombre = document.getElementById('nombre');
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("enviar");
const resultado = document.querySelector(".resultado");
const rojo = document.querySelector(".rojo");
const verde = document.querySelector(".verde");

boton.addEventListener('click', (e)=>{
    e.preventDefault();
    let error = validarCampos();
    if(error[0]){
        resultado.innerHTLM = error[1];
        // resultado.classList.add('rojo');
        resultado.classList('.rojo')
    }else{
        resultado.innerHTML = 'Solicitud enviada';
        // resultado.classList.add('verde');
        resultado.classList('.verde')
    }
});

const validarCampos = ()=>{
    let error = [];
    if(nombre.value.length < 5){
        error[0] = true;
        error[1] = 'El nombre debe de teber más de 5 caracteres';
        return error;
    }else if(nombre.value.length > 40){
        error[0] = true;
        error[1] = 'El nombre no puede tener más de 40 caracteres';
        return error;
    }
    // else if(email.value.length > 4 || 
    //          email.value.length > 40 || 
    //          email.indexOf('@Email.com')== -1){
            
    //     error[0] = true;
    //     error[1] = 'El email no es válido';
    // }
    error[0]=false;
    return error;
}