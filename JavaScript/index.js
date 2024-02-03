
let nombre = document.querySelector('.name'); 
let enviar = document.querySelector('.enviar');

enviar.addEventListener('click', ()=>{
    alert(`Hola ${nombre.value}`);
});
  