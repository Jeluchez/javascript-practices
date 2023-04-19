//colocar el elemento en la ultima posicion
function arrayAsc(){
	var n = [9,7,6,5,3,4,11,8];
	var i=0,j=0,a;

	while(j<n.length){
		while(i<n.length){
			if (n[i]>n[i+1]) {
				a = n[i+1];
				n[i+1] = n[i];
				n[i] = a
			}
			i++;
		}
		i=0;
		j++;
	}
	alert(n);
}
arrayAsc();
