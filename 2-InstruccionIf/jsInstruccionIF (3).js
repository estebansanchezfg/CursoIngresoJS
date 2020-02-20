function mostrar()
{
//tomo la edad  
var edad;

edad = parseint(document.getElementById("edad").value);

if( edad >=18) {
    alert("es mayor de edad");

}
if ( edad < 18) {

       alert("es menor de edad");
}

}//FIN DE LA FUNCIÓN