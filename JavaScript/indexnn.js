const nombre = document.getElementById('nombre');
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("enviar");
const resultado = document.querySelector(".resultado");
const h = document.querySelector('button');

boton.addEventListener('click', (e)=>{
    e.preventDefault();
    let error = validarCampos();
    if(error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add('reed');
    }else{
        resultado.innerHTML = 'Solicitud enviada correctamente';
        resultado.classList.add('greeen');
    }
});

const validarCampos=()=>{
    let error=[];
    if(nombre.value.length < 5 ){
        error[0]=true;
        error[1]='El nombre no puede contener menos de 5 caracteres';
        return error;
    }else if(nombre.value.length > 40){
        error[0]=true;
        error[1]='El nombre no puede contener más de 40 caracteres';
        return error;
    }
    error[0]=false;
    return error;
}