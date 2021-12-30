function busLet(){
	var i=0;
	var nombres=[];
	nombres.length = 5
	while(i < nombres.length){
		nombres[i] =prompt("ingrese nombre","");
		i++;
	}
	return nombres;
}
function numarrap(){
	var i=0;
	var nombres = busLet();
	while(i<nombres.length){
		if(i % 2 ==0){
			document.write(nombres[i]);
		}
		i++;
	}

}
numarrap();