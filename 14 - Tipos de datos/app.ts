
(function(){
   let mensaje: string = 'Hola';
   /* Si no inicializo la variable, no sé que tipo de variable es, sin embargo,
   al inicializarlo a 'Hola' infiere que es tipo String */
   let numero: number = 123;
   let booleano: boolean = true; 
   let hoy: Date= new Date(); //Estoy creando un objeto (es una función constructora)

   let cualquiercosa;  //No he inicializado la variable, por lo que tendría que decir el tipo
                  //Si no se indica nada es de tipo "any" que es cualquier tipo

                  cualquiercosa=mensaje; 
                  cualquiercosa=numero; 
                  //El tipo any es de cualquier tipo por lo que no da errores

    let cualquiercosa2: string | number ;
        cualquiercosa2 =booleano; //Da error, hemos indicado que o bien es tipo String o number


        /* Creo un nuevo objeto */

        let spiderman = {
            nombre: 'Peter',
            edad: 30
        }

        spiderman = {
            nombre: 'Juan',
            edad : '100' , //Si uso los tipos NO adecuados me da error puesto que anteriormente ya he definido el objeto
                            //Edad es tipo number y lo estoy usando como String

            poder: 'Trepar paredes'
        }
} ) ();
