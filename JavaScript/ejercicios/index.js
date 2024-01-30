function contrasenaValida(a){
    if(a=='2Fj(jjbFsuj' || a=='eoZiugBf&g9'){
        alert('Bienvenido')
    }else{
        alert('Lo siento, acceso denegado');
    }
}

// contrasenaValida("eoZiugBf&g9")
// contrasenaValida("2Fj(jjbFsuj")

function calcularImpuestos(edad, ingresos){
    if(edad >= 18 && ingresos >= 1000){
        resul = ingresos*0.40
        alert(resul)
    }else{
        alert(0)
    }
}

// calcularImpuestos(7, 5000)

function bmi(peso, altura){

    let IMC= peso/altura**2;

    if(IMC < 18.5){
        document.write('Su peso es: <b>Bajo peso</b>');
    }else if(IMC >= 18.5 && IMC <= 24.9 ){
        document.write('Su peso es: <b>Peso normal</b>');
    }else if(IMC >= 25 && IMC <= 29.9 ){
        document.write('Su peso es: <b>Sobre peso</b>');
    }else if(IMC >= 30){
        document.write('Su peso es: <b>Obeso</b>');
    }
}

// bmi(135, 1.7)

function imprimirArreglo(a, b, c, d){
    var arreglo = [a, b, c, d];

    for(i in arreglo){
        document.write(arreglo[i]+" ");
    }
}

// imprimirArreglo(1, "Cristian", "Estiven", 22);

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// numeros.forEach(function(numero){
//     document.write(`<br>${numero}`);
// });

function likes(a){
    if(a >= 1000 && a <=999999){
        document.write(`<b>${a }K</b>`);
    }else if(a > 999999){
        document.write(`<b>${a}M</b>`);
    }else{
        document.write(`<b>${a}</b>`);
    }
} 

// likes(1000000)


function fizzBuzz(a){
    var a = parseInt(prompt("Ingresa un número: ")); 
    if ((a%3==0)){
        document.write(`<b>Fizz</b>`);
    }else if((a%5==0)){
        document.write(`<b>Buzz</b>`);
    }else if((a%3==0) && (a%5==0)){
        document.write(`<b>FizzBuzz</b>`);
    }else{
        document.write(`<b>${a}</b>`);
    }
}

// fizzBuzz();

function contarRango(a, b){
    var a = parseInt(prompt("Ingresa un número: ")); 
    var b = parseInt(prompt("Ingresa otro número: ")); 

    for(let i=0;     i++){
        document.write();
    }
}
