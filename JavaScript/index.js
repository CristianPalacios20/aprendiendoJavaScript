
let nombre = document.querySelector('.name'); 
let enviar = document.querySelector('.enviar');
let a = document.querySelector('.a');

enviar.addEventListener('click', (e)=>{
    e.preventDefault();
    div.innerHTML = `Hola ${nombre.value} cómo te encuentras papi?`;
    div.classList.add('azul');
});

