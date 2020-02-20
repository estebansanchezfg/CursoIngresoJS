function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var maximo  = 10;
	var minimo  = 1;

	nota = math.floor(math.random()*((maximo + 1) - minimo) + minimo);
	
	if (nota < 4) {
		alert("vamos la proxima se puede. nota: ")
	}
	else if (nota < 9) {
		alert("aprobo. Nota: " + nota);
	}
	else {
		alert("excelente. nota:" + nota);
	}

}//FIN DE LA FUNCIÓN