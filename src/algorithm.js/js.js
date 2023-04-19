function imparConPar (n) {
	i=0;
	j=0;

	while(i<=n){
		if ((i % 2) != 0) {
			document.write(i + "<br>");
				
		}
		else{
			j++;
		}
		i++;
	}
	document.write("hay " + j + " pares entre 0 y " + n + "<br><br>");
}
imparConPar(10);


function sumImpar (n) {
	i=0;
	sum=0;

	while(i<=n){
		if ((i % 2) != 0){
			sum = sum + i;
		} 
		i++;
	}
	document.write("la suma es " + sum);
}
sumImpar(100);

function mulTres(n){

	i=0;
	c=0;

	while(i<=n){
		if((i%3) == 0){
			document.write(i + "<br>");
			c++;
		}
		i++;
	}
	document.write("el numero de multiplos de 3 son: " + c);
}
mulTres(20);

function sumParImp (n) {
	i=0;
	sumPar=0;
	sumImp=0;
	while(i<=n){
		if (i%2 ==0) {
			sumPar = sumPar + i;
		} else{
			sumImp = sumImp + i;
		}
		i++;
	}
	document.write("<br>La suma de los pares es:" + sumPar +"<br>");
	document.write("La suma de los impares es:" + sumImp + "<br>");
}
sumParImp(4);

function num5() {
	i=0;
	n=0;
	max=0;
	min=100;
	while(i<5){
		n = prompt("ingrese numero","");
		n = parseInt(n);
		if (n>max) {
			max = n
		}
		if(n<min){
			min = n;
		}
		i++;
	}
	document.write(" el numero mayor es: " + max +"<br>");
	document.write("El numero menor es: " + min + "<br>");
}
num5();