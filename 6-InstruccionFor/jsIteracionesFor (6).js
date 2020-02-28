function mostrar()
{
    var numero;
    var contadorPares = 0;

    numero = parseInt(prompt("ingrese un numero: "));
    while (isNaN(numero)){
        numero = parseint(prompt("eso no es un numero. ingrese"))
    }

    for(var i = 1;i >=numero; i++){

        if(i % 2 ==0){

        //aca solo entra i tiene un valor par
        console.log(i);
        contadorpares++;

        }


    }
    console.log("cantidad de pares encontrados: " + contadorPares);




}//FIN DE LA FUNCIÓN