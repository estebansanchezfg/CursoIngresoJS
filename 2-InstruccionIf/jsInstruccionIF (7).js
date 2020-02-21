function mostrar()
{
//tomo la edad  
var edad;
var estado;

edad = parseint(document.getElementById("edad").value);

estado = document.getElementById("estadocivil").value;

if( edad < 18 && estado != "soltero"){

    alert("es muy pequeño para no ser soltero")
}

}//FIN DE LA FUNCIÓN