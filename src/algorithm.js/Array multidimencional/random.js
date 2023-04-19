function selectFrom(lowerValue, upperValue) {
	var choices = upperValue - lowerValue + 1;
	return Math.floor(Math.random() * choices + lowerValue);
}
// var num = selectFrom(4,5);
// alert(num);
// var num = Math.floor(Math.random() *3+4); //posibilidad : 4,5,6
// var num2 = Math.floor(Math.random() *7+4); //posibilidades: 4,5,6,7,8,9,10
// alert(num2);

var array = [];
var inArray = []; //creo un array, para añadirlo al pricipal array
//array 2*2 y agregando valores aleatorios del 1 al 100
for (var i =0; i <= 1; i++) {

 		
 		for (var j =0; j <=1 ; j++) {

 			var num1= selectFrom(1,100);//almaceno el numero aleatorio
 			inArray[j]=num1;//añado el numero aleatorio en la posicio J
 		}
 		array[i]= inArray;//agrego el array al array principal en la posicion i
 		inArray = []; //vacio el array para su siguiente iteracion.Sino hago esto, el array principal 
 		//me almacena en todas la posiciones el ultimo valor del array interior
 }
 alert(array);
 
 // muestra cada valor de un matriz 2*2
 /*for (var i =0; i <= 1; i++) {

 		 for (var j =0; j <= 1; j++) {

 			alert(array[i][j]);
 	}
 }
 alert(array);*/
