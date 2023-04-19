function busLet(){
	i=0;
	c=0;
	res="s";
	letra="";
	frase="";
	lng=0;

	while(res == "s"){
		frase = prompt("ingrese frase","");
		//frase = toString(frase);
		lng = frase.length;
		letra = prompt("ingrese letra a buscar","")

		while(i<=lng){
			if (letra == frase[i]) {
				c++;
			}
			i++;
		}
		alert("la letra" + letra + " esta " + c + " vece(s)");
		res = prompt("¿desea ingresar frase? s/n","");
	}
|
	

}
busLet();