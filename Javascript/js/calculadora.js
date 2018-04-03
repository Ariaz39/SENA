function calcular(){

var n1=document.getElementById("num1").value;
var n2=document.getElementById("num2").value;
var ope=document.getElementById("ope").value;
var res= 0;
var tabla=0;

switch(ope){
	case "+":
		res=parseInt(n1)+parseInt(n2);
		break;
	case "-":
		res=n1-n2;
		break;
	case"*":
		res=n1*n2;
		break;
	case"/":
		res=n1/n2;
		break;
	}

document.getElementById("res").innerHTML=res;

tabla='<table><tr><th>Resultado</th></tr>';
tabla+='<tr><td>'+res+'</td></tr></table>';
document.getElementById("tabla").innerHTML=tabla;
}
