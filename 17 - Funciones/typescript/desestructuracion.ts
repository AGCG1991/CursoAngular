
(function(){
    
    const avenger = {

        nombre: 'Steve',
        clave: 'Capitán América',
        poder: 'Droga',

    }
    const extraer = ({ nombre,poder}: any) => {


         //Desestructuración de objetos (en este caso no importa el orden)
            //const {nombre,clave,poder} = avenger;

    console.log(nombre);
    console.log(poder);
    }
   
 // extraer(avenger);


//Es un arreglo
     const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

     const [thor, hombre,arana] = avengers;
         //Como uso la desestructuración de arreglos, hombre apunta a Ironman, araña a spiderman
        //si escribo const [ , , arana] indico que sólo me interesa la 3º variable
     //console.log(avengers[0]);
     //console.log(avengers[1]);
     //console.log(avengers[2]);

     console.log(thor);
     console.log(hombre);
     console.log(arana);

     const extraerArr = ( [thor,ironman,spiderman]: string []) => {

        console.log(thor);
         console.log(ironman);
         console.log(spiderman);
     }


     extraerArr (avengers);
 } ) ();
 