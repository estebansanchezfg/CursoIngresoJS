function mostrar()
{
//tomo la edad  

var edad
edad = parseInt(document.getElementById("edad").value);

if(edad >= 18) // si se cumple la condicion (no lleva ; (!))
{
    alert("es mayor de edad");
}
else //sino 
{
    alert ("es menor de edad"); // esto otro (no lleva condicion)
}
alert ("sarasa")
}//FIN DE LA FUNCIÓN