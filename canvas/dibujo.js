var d = document.getElementById("dibujito");
var texto = document.getElementById("cajas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var lienzo = d.getContext("2d");


function dibujoPorClick()
{
	var x = parseInt(texto.value);
	var lineas = 30;
var l = 0;
var xi, yi, xf, yf;

for(l = 0; l < lineas; l++) 
{
	xi = 10 * l;
	yi = 10 * l;
	xf = 10 * (l + 1);
	yf = 10 * (l + 1);
	dibujarLinea("green",1,yi,xf,299);
}
for(l = 0; l < lineas; l++) 
{
	xi = 10 * l;
	yi = 10 * l;
	xf = 10 * (l + 1);
	yf = 10 * (l + 1);
	dibujarLinea("green",xi,1,299,yf);
}

dibujarLinea("blue",1,1,1,299);
dibujarLinea("blue",1,299,299,299);
dibujarLinea("blue",1,1,299,1);
dibujarLinea("blue",299,1,299,299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}
