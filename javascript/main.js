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


/*var numeros = []; 
    
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

//Ingresamos por teclado el tamaño del arreglo
var tamanio = parseInt(prompt("ingrese el tamaño del arreglo"))
//Inicialisamos el tamaño del arreglo
var arreglo = [tamanio]
//iniciamos la variable mayor
mayor = arreglo[0]
//iniciamos la variable menor
menor=arreglo[0]
//Ingreso los datos por teclado mediante un ciclo for
for(i=0; i<=tamanio; i++){
    arreglo [i]=parseInt(prompt("Ingrese el numero " + (i+1)))

}
//imprmimos en pantalla los datos
document.write(arreglo)

//recorremos el arreglo
for(i=0; itama)
*/
    //Un pograma en js donde el usuario
    //ingrese un numero por teclado
    //verificar si ese numero es primo o no
    //un numero es primo cuando es divisible para uno y para si mismo 

    //Ingresamos el tamaño del arreglo
//var numero = prompt("ingrese el numero a verificar");

//var contador = 0
document.write("Los numeros primos son:" + "<br>")
for(let num = 1; num<=10; num++){
    //Creo una variable en donde me va a contar los divisores.
   let divisor = 0;
    //Creare una funcion que me va a ir iterando
    //los numeros de 1 en 1 para encontrar sus divisores
   for(let i=1; i<=num; i++){
    if (num % i === 0){
        divisor++;
    }
   }
   //Esta funcion me ayudara a ver que el numero
   //Tenga exactamente dos divisores
   if (divisor === 2){
        document.write(num + "<br>")
   }

}

