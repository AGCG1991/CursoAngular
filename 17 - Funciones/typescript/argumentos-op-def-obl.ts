
(function(){
    
    function activar ( quien: string, 
                       momento?: string,
                       objeto: string = 'batiseñal') //Valor por defecto) //opcional
                       //1º Argumentos obligatorios 2º Opcionales 3º Por defecto 

                       
    { //Hay que especificar el tipo de datos en los argumentos de las funciones
        //Si quiero que no sea obligatoria, al argumento objeto le doy un valor , de esa manera no me lo pide luego
        //al hacer la llamada a la función.
       if (momento) {
        console.log(`${quien} activó la ${ objeto} en la ${momento} .`);
       }console.log(`${quien} activó la ${ objeto} `); 
       
    }

    activar('Gordon', 'tarde');
    //Si le paso un segundo argumento me da error pues espera un 3º, no recoge el valor por defecto de batiseñal

 } ) ();
 