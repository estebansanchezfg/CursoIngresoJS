function mostrar()
{
    var numero;
    var contadorDivisores = 0;

    numero = parseInt(prompt("ingrese un numero: "));
    while (isNaN(numero)){
        numero = parseint(prompt("eso no es un numero. ingrese"))
    }

    for(var i = 1;i >=numero; i++){

        if(i % 2 ==0){

        //aca solo entra cuando i tiene un valor par
        console.log(i);
        contadorDivisores++;

        }


    }
    console.log("cantidad de divisores encontrados: " + contadorDivisores);




}//FIN DE LA FUNCIÓN