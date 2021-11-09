var eleccion = prompt('Ingrese el número correspondiente para escoger la operación que quiere realizar:     1)Suma,     2)Resta,     3)Multiplicación,     4)División,     5)Raíz cuadrada     6)Fórmula general     7)Binomio al cuadrado');

switch(eleccion) {



case '1': 
function sumar() {
num1 = prompt('Ingrese el primer número a sumar');
num2 = prompt('ingrese el segundo número a sumar');
if (isNaN(num1) & isNaN(num2)) {
console.log('Ingrese un(unos) número(s)');
}
else { 
num3 = parseFloat(num1) + parseFloat(num2);
console.log(`Su resultado es: ${num3}`);
} 
}
sumar();
break




case '2':
function restar() {
num4 = prompt('Ingrese el primer número a restar');
num5 = prompt('ingrese el segundo número a restar');
if (isNaN(num4) & isNaN(num5)) {
console.log('Ingrese un(unos) número(s)');
}
else { 
num6 = parseFloat(num4) - parseFloat(num5);
console.log(`Su resultado es: ${num6}`);
} 
}
restar();
break




case '3':
function multiplicar() {
num7 = prompt('Ingrese el primer número a multiplicar');
num8 = prompt('ingrese el segundo número a multiplicar');
if (isNaN(num7) & isNaN(num8)) {
console.log('Ingrese un(unos) número(s)');
}
else { 
num9 = parseFloat(num7) * parseFloat(num8);
console.log(`Su resultado es: ${num9}`);
} 
}
multiplicar();
break




case '4':
function dividir() {
num10 = prompt('Ingrese el primer número a dividir');
num11 = prompt('ingrese el segundo número a dividir');
if (isNaN(num10) & isNaN(num11)) {
console.log('Ingrese un(unos) número(s)');
}
else { 
num12 = parseFloat(num10)/parseFloat(num11);
console.log(`Su resultado es: ${num12}`);
} 
}
dividir();
break




case '5':
function raiz() {
num13 = prompt('Ingrese el número');
num14 = Math.sqrt(num13);
if (isNaN(num13) & isNaN(num14)) {
console.log('Ingrese un(unos) número(s)');
}
if (num13 < 0) {
console.log('Ingrese un número positivo');
}
else { 
console.log(`El resultado es: ${num14}`);
}
}
raiz();
break



case '6':
function formulagral() {
lit1  = prompt('Ingrese la literal (x, y, v...)');
num15 = prompt('Ingrese el término cuadrático (únicamente el número)');
num16 = prompt('ingrese el término lineal (únicamente el número)');
num17 = prompt('Ingrese el término indepediente (únicamente el número)');
if (isNaN(num15) & isNaN(num16) & isNaN(num17)) {
console.log('Ingrese un(unos) número(s)');
}
else { 
num18 = Math.pow(num16, 2) - (4 * num15 * num17);
if (num18 > 0) {
num19 = Math.sqrt(num18);
num20 = ((-1 * num16) + num19)/(2 * num15);
num21 = ((-1 * num16) - num19)/(2 * num15);
console.log(`Los resultados son: ${lit1} (1ra)= ${num20} ${lit1}, (2da)= ${num21}`);
} 
else {
console.log(`El resultado de la raiz cuadrada es negativo, por tanto no se puede seguir con la operacion`);
}
}
}
formulagral();
break



case '7':
function binomio() {
var signo;
lit2  = prompt('Ingrese la literal (x, y, v...)');
num22 = prompt('Ingrese el primer termino');
num23 = prompt('Ingrese el segundo termino');
if (isNaN(num22) & isNaN(num23)) {
console.log('Ingrese un(unos) número(s)');
}
else { 
num24 = Math.pow(num22, 2);
num25 = (2 * num22 * num23);
num26 = Math.pow(num23, 2); 
if (num24 > 0 & num25 > 0 & num26 > 0) {
console.log(`Su resultado es: ${num24}${lit2}² + ${num25}${lit2}  + ${num26}`);
} else
console.log(`Su resultado es: ${num24}${lit2}²  ${num25}${lit2} + ${num26}`);
}
}
binomio();
break



default :
console.log('Ingrese únicamente el número de la operación que desea realizar (1, 2, 3...)');
}












