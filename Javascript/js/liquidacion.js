
function liquidar(){

var nombres=document.getElementById("nombres").value;
var salario=document.getElementById("salario").value;
var salarito=(salario/30)*diasl;
var diasl=document.getElementById('diasl').value;
var fechai=document.getElementById('fechai').value;
var fechaf=document.getElementById('fechaf').value;
var triesgo=document.getElementById('triesgo').value;
var salud= parseInt(salario*12.5/100)/30;
var pension=parseInt(salario*16/100)/30;
var arl=("")

	switch(triesgo){
		case "1":
		arl=parseInt(salario*0.522/100);
		break;
		case "2":
		arl=parseInt(salario*1.044/100);
		break;
		case "3":
		arl=parseInt(salario*2.436/100);
		break;
		case "4":
		arl=parseInt(salario*4.350/100);
		break;
		case "5":
		arl=parseInt(salario*6.960/100);
		break;
	}

tabla='<table border="1px solid black" class="tablar"><tr><th>Empleado</th><th>Dias Laborados</th>'
tabla+='<th>Salario</th><th>Fechas</th><th>Salud</th>'
tabla+='<th>Pension</th><th>ARL</th></tr><tr><td>'+nombres+'</td>'
tabla+='<td>'+diasl+' dias</td><td>$ '+salarito+'</td><td>'+fechai+' a '+fechaf+'</td>'
tabla+='<td>$ '+salud+'</td><td>$ '+pension+'</td><td>$ '+arl+'</td></tr></table>'


document.getElementById("tabla").innerHTML=tabla;
}

