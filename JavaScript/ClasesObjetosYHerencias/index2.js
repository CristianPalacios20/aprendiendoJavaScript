const materias={
        fisica: [90,5,3, "Física", "Juan"],
        programacion:[90,5,3, "Programación", "Duvan"],
        logica: [90,5,3, "Lógica", "juan"],
        quimica:[70,5,3, "Química", "Jaramillo"]
    }

const aprobo=()=>{
    for(i in materias){
        let asistencias=materias[i][0];
        let promedio=materias[i][1];
        let trabajos=materias[i][2];

        console.log(`%c ${materias[i][3]}`, "color:blue");
        console.log(materias[i][4])

        if(asistencias>=90){
            console.log(`Asistencias: %cOK`, "color:green");
        }else{
            console.log(`Asistencias: %cKO`, "color:red");
        }

        if(promedio>=5){
            console.log(`Nota: %cAprobado`, "color:green");
        }else{
            console.log(`%cReprobado`, "color:red");
        }

        if(trabajos>=3){
            console.log(`Trabajos: %cOK`, "color:green");
        }else{
            console.log(`Trabajos: %cIncompletos`, "color:red");
        }

    }
}

aprobo()
