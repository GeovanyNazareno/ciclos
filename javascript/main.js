/*Estructura de ciclo for
Me permite repetir n veces una secion de codigo
el ciclo for Tiene 3 parametros como:
Inicio, fin y incremento
Sistasis basica es la sigiente:
for(inicio;fin,incremento){
    bloque de codigo a repetir
}
Variables de tipo let => Cuando se nesecita que el dato sea utilizado
dentro de una secion de codigo, eso quiere decir que va a estar dsponible en la
secion donde fue creada

Variable de tipo var=> Esta variable puede ser utilizada y esta disponible en todo mi programa 

operadores aricmeticos son los siguentes 
+suma
-resta
*multiplicacion 
/
%modulo*/

/*for(let i=1; i<=10; 1++){
    //creo una condicion para encontrar numeros pares
    if(i%2==0){
        document.write(i+ "<br>")
    }
}

var tamanio = prompt("Ingrese el tamaño del arreglo")
tamnio=parseInt(tamanio)
var notas = [tamanio]
for(j=0; j<=tamanio;j++){
    notas[i]=parseInt(prompt("ingrese la nota" + j+1))
}
for(j=0; j<=tamaño; j++){
    document.write(motas[j]);
}*/


var numeros = []; 
    
for (var i = 0; i < 5; i++) {
    var num = prompt("Ingrese el número " + (i + 1) + ":");
    numeros[i] = num;
}
        
var mayor=numeros[0];
var menor=numeros[0];

for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
    mayor = numeros[i];
    }
    if (numeros[i] < menor) {
    menor = numeros[i];
    }
}
    
for (var i = 0; i < numeros.length; i++) {
    document.write(numeros[i] + "<br>");
}
document.write("<br>El número mayor es: " + mayor);
document.write("<br>El número menor es: " + menor);
