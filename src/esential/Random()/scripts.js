var startNum,endNum,quantityNum;


var initRandom = function() {
	catchNums();
}
function compare(value1, value2){
	return  value1 - value2; 
	/*Of descending form
	return  value2 + value1 ; */
}
function catchNums () {
	startNum= document.getElementsByName("start")[0].value;
	endNum= document.getElementsByName("end")[0].value;
	//convierto a entero los numeros
	startNum= parseInt(startNum);
	endNum= parseInt(endNum);
	//console.log(startNum +  endNum);
	selectForm(startNum,endNum);
}
function selectForm(start, end) {
	ranNumArray=[];
	quantityNum= document.getElementsByName("quantity")[0].value;
	choices = end - start + 1;

	for (var i = 0; i < quantityNum; i++) {
		ranNumArray[i]=Math.floor(Math.random() * choices + start);
	}
	addNums(ranNumArray);
}
function addNums(nums){
	article = document.createElement("article");
	div=document.getElementById("numbers");

	article.innerHTML=nums;
	div.appendChild(article);
}
var clearDiv = function() {
	document.getElementById("numbers").innerHTML="";

}
