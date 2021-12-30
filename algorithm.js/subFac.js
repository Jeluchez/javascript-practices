function run(n){
	var res="s";
	while(res == "s"){
		if (n<1) {
			alert("no tiene factorial")
		} else{
			calculo(n)
		}
		res = mas();
	}

	
}
function calculo (n) {
	var fact=1; 
	numP = n
	while(n>1){

		fact = fact *n;
		n = n-1;
	}
	imprimir(numP,fact);
}
function mas(res){
	res=prompt("¿mas factorial?  (s/n)","");
	return res;
}
function imprimir (n,fact) {
	alert("El factorial de: " + n + " es " + fact);
}
run(5);