//Nodejs provee nativamente la función openStdin() para aceptar entradas por teclado, aquí un ejemplo:
//Para leer la terminal
// console.log("Escribe tu nombre:");
// const stdin = process.openStdin();

// stdin.addListener("data", (data) => {
//     console.log("Tu nombre es: " + data.toString());
//     //process.exit();
// })

const { AsyncLocalStorage } = require('async_hooks');
const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// interfazCaptura.question('¿Cuál es su correo electrónico?: ', function(respuesta){
//     console.log(`Su correo electrónico es:  ${respuesta}`);

//     interfazCaptura.close();
// });

let contador = 0
let aux = 0
entrada();


function entrada() {

        interfazCaptura.question('ingrese un numero: ', function (respuesta) {
           
           
            if (contador == 0) {
                console.log(`numero es:  ${respuesta}`);
                contador ++
                aux = respuesta
            } else {
                if (aux!=respuesta)
                    {
                    console.log("numero es: " + respuesta)
                    aux = respuesta
                    }
            }
        
            entrada();
        });
    
}





