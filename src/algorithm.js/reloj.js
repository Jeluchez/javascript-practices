function reloj(h,m,s){
	while(h<24){
		while(m<60){
			while(s<60){
				document.write(h + " : " + m + " : " + s);
				s++;
			}
			m++;
			s=0;
		}
		h++;
		m=0;
	}
	

}
reloj(0,0,0);