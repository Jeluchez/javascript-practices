var i=0,fi=1,l=[],c=0;
var abcS="";
function holaAdios(){
	var i=0;
	var sw=0;
	while (i<=10){
		if (sw==0) {
			console.log("Hola");
			sw=1;
		} else{
			console.log("Adios");
			sw=0;
		}
		i++;
	}

}
//holaAdios();
function intData() {

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
intData();