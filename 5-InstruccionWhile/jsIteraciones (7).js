function mostrar()
{
    var numero;
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var seguir = "5";

	do {
		
		numero = parseint(promp("ingrese un numero: "))
		while (isNaN(numero)){
			numero = parseInt(prompt(" eso no es seguro.ingrese un numero:"));
		}
		   acumulador = acumulador + numero;
		   
		   cortadores;



		seguir = prompt("quiere ingresar otro numero?");
	} while (seguir == "s")
promedio =acumulador / contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN