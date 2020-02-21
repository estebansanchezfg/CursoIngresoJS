function mostrar()
{

	var flag=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	do {
		
		numero = parseint(promp("ingrese un numero: "))
		while (isNaN(numero)){
			numero = parseInt(prompt(" eso no es seguro.ingrese un numero:"));
		}
		   
		if( numero >= 0)     {
			positivo = positivo + numero;


		}else{
			negativo = negativo * numero
            flag = 1;

		}


		seguir = prompt("quiere ingresar otro numero?");
	} while (seguir == "s");

	if( flag == 0){
		negativo= 0;
	}




document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN