
(function(){
    
    const miFuncion = function ( a: string) {
        return a.toUpperCase();
    }

    const sumarN = function( a:number, b:number)
    {
        return a+b;
    }
    
    //Función de Flecha
    const miFuncionF = (a: string) => a.toUpperCase();
    const SumarF = (a:number,b:number) => a+b;
    //Con la función flecha me ahorro el return e indico directamente la operación que quiero hacer

    //console.log (SumarF(5,4));


    const hulk = {
        nombre : 'Hulk',
        smash (){
            

            setTimeout(()  => {
                
                console.log(` ${this.nombre } smash!!! `);
                    //Me sugiere un error en el this, he metido el console.log dentro de setTimeout,ya no apunta al objeto hulk
                    //Si quito la función y uso una función de flecha, se arregla, las funciones de flecha no cambia a donde apunta this
                    //Si paso por encima el cursos (sobre this), me informa hacia donde apunta
            }, 1000); //Se ejecuta justo 1 segundo después (si paso el cursos sobre la función me explica los argumentos)
          
             //Función que me permite ejecutar una función en determinado tiempo
           
           
           
        }

    }
    hulk.smash();
    

 } ) ();
 