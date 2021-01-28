
(function(){
    
 //Promesas y su tipado en Ts

     const retirarDinero = (montoRetirar:number): Promise <number> => {
                                                 //Le expreso cual es el tipo de la promesa si no da error
        let dineroActual =1000;

        return new Promise( (resolve, reject) => {

            if (montoRetirar > dineroActual)
            {
                reject('No hay suficientes fondos');

            }else {
                dineroActual -=montoRetirar;
                resolve(dineroActual);
            }
        });

     }


     retirarDinero (500)
         .then(montoActual => console.log(`Me queda ${montoActual}`))
         .catch(err =>console.warn(err)) //Si retiro más del monto total, atrapo el error y lo expreso como Warning
 } ) ();
 