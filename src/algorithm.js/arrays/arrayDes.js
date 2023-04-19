/*var i=0,fi=1,l=[],c=0;
var abcS="";*/

//imprimir 6 letras y mostrar un salto de linea
/*function intData () {

	l.length = prompt("ingrese tamaño de la lista","");
	while(i<l.length){
		l[i] = prompt("ingrese nombre","");
		abcS = abcS + l[i] + "           ";
		i++;
		c++;
		if (c == 6) {
			abcS = abcS + "\n";
			c=0;
		}
	}
	alert(abcS);

}
intData();*/
//colocar el elemento en la ultima posicion
/*function arrayAsc(){
	var n = [8,4,5,3];
	var i=0, a;
	while(i<n.length){
		if (n[i]>n[i+1]) {
			a = n[i+1];
			n[i+1] = n[i];
			n[i] = a
			n[i] = n[i];
		}
		i++;
	}
	alert(n);
}
arrayAsc();*/
//hallar el menor numero en un array y mostrar su posicion
/*function arrayMin(){
	var n = [4,3,4,1];
	var i=0, min = 0,pos=0;
	while(i < ((n.length)-1)){
		if (n[i]<n[i+1]) {
			min = n[i];
			n[i+1] = n[i];
			pos=i;
			
		}
		else{
			min = n[i+1]; 
			pos= i+1;
		}
		i++;
	}
	alert(min + " posicion: " + pos);
}
arrayMin();*/
//obtener una nueva lista 
//con elementos de otra lista multiplicados por algun numero

function arrayPro(){
	var l = [1,2,3];
	var l2=[];
	var n=0,i=0;
	n = prompt("ingrese numero a multiplicar por la lista","");
	while(i < (l.length)){
		l2[i] = l[i] * n;
		i++;
	}
	alert("lista original \n" + l + "\n lista modificada \n" + l2 );
}
arrayPro();