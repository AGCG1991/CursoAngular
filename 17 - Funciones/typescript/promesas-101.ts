
(function(){
    
   //Promesas

   /* Sirven para ejecutar el código sin bloquear el hilo principal*/


   console.log ('Inicio');
    
   const prom1 = new Promise( ( resolve, reject) => {
    //Tengo que mandar 2 funciones, resolve y reject
        //1º cuando todo funciona correctamente
        //2º El que llamamos cuando ocurre algún error

        setTimeout (() => {
            reject('Se terminó el timeout')
        }, 1000);

   });
   // Las promesas no existe en el estándar es5, por lo que pasaremos al es6 (no existe equilvalencia en Js en el estándar es5)




    prom1
    .then ((mensaje => console.log(mensaje))) //No es bloqueante
    .catch(err => console.warn(err));
    //El Catch es a lo que llamo cuando todo va bien, el then cuando ocurre algún error


   console.log('Fin');
 } ) ();
 