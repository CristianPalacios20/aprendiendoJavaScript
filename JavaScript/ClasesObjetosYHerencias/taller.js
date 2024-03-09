 class Celular{
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false
    }
    prender_apagar(){
        if(this.encendido == false){
            alert("Encendido")
            this.encendido = true
        }else{
            alert("El celular está apagado")
            this.encendido = false
        }
    }

    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando celular")
        }else{
            alert("El celular está apagado")
        }
    }
    tomarFotos(){
        alert(`Foto tomada en una resolución de: ${this.rdc}`)
    }
    grabar(){
        alert(`Video grabado en ${this.rdc}`)
    }

    info(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolución de pantalla: <b>${this.rdp}</b><br>
        Resolución de cámara: <b>${this.rdc}</b><br>
        Memoria RAM: <b>${this.ram}</b><br>
        `
    }
}

class CelularGamaAlta extends Celular{
    constructor(color, peso, rdp, rdc, ram, rdce ){
        super(color, peso, rdp, rdc, ram)
        this.rdce = rdce
    }

    GrabarCamaraLenta(){
        alert(`Grabando cámara lenta`)
    }

    ReconocimientoFacial(){
        alert(`Realizando reconocimiento facial`)
    }
    infoAltaGama(){
        return this.info() + `Resolución de cámara extra ${this.rdce}`
    }

}

const celular1 = new CelularGamaAlta("rojo", "150g", "4k", "full hd", "2gb", "full HD")
const celular2 = new CelularGamaAlta("negro", "150g", "5k", "hd", "2gb", "HD")
const celular3 = new Celular("  Negro", "150g", "2.5k", "full hd", "4gb")


document.write(`
    ${celular1.infoAltaGama()} <br>  <br>
    ${celular2.infoAltaGama()} <br>
    `);
