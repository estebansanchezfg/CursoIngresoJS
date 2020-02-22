function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var respuesta='si';

	while(respuesta ==	'si')
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		respuesta = prompt("desea ingresar otro numero?")
		respuesta = respuesta.toLowerCase();
		alert(respuesta);
	
	}

/*
	var contador=0;
	// declarar variables
	var flaf = false
	var numero;

	var maximo ;
	var minimo ;


	var respuesta=true;

	while(respuesta ==	true)
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);

		if (contador == 0){
			maximo = numero;
			minimo = numero;
		}
		else{
			if(numero > maximo){
				maximo = numero;
			}
			else{
				if(numero<minimo)
				{
					minimo = numero
				}
            

		
			}
		contador ++;
		}

		
document.getelementbyid("maximo").value =maximo;
document.getelementbyid("maximo").value =minimo;

		respuesta = confirm ("desea ingresar otro numero?")
		
		alert(respuesta);
	}



}//FIN DE LA FUNCIÓN