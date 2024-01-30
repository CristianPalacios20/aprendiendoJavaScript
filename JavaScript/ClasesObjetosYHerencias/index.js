class Animales{
    constructor(especie, años, color){
        this.especie = especie;
        this.años = años;
        this.color = color;
        this.informacion = `La especie es: ${this.especie}, la edad es: ${this.años} y el color es: ${this.color}`;

    }
    verInfo(){
        document.write(this.informacion)
    }
    ladrar(){
        if(this.especie=="Perro"){
            document.write("Guauu"+"<br>");
        }else{
            document.write(`No puede ladrar porque es de la especie ${this.especie} <br>`);
        }
        
    }

}

class Perro extends Animales{
    constructor(especie, años, color, raza){
        super(especie, años, color)
        this.raza = raza;
    }
}

const perro = new Perro("Perro", 5, "rojo", "Putbull");
const gato = new Animales("gato", 5, "rojo");




perro.ladrar();
gato.ladrar()
perro.verInfo();