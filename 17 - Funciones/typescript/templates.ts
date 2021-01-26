
(function(){

    function getEdad() {
        return 100+100+300;
    }

     const nombre = 'Fernando';
     const apellido = "Herrera"
     const edad = 33;
   
         //Fernando Herrera (Edad : 33);
            //const salida = nombre+apellido+edad (Problema, saldría todo pegado)

           // const salida = nombre + " " + apellido + " ( " + edad + " )"; 
               //Existe una forma mas sencilla

        const salida = `${nombre} ${apellido} ( ${getEdad()} ) `;
            //Si pongo la variable nombre, me imprime literalmente 'nombre;
            //Tengo que usar ${} para que me lo imprima

            //Puedo hacer operaciones dentro de ${edad}
            
            console.log(salida);
 } ) ();
 