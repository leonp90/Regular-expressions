function string(S){
	var str = S.replace(/[0-9]/g, " ");
	var arr = str.split(" ");
	var long = -1;
	console.log(str);
	for( var i=0; i< arr.length; i++ ){
		if(arr[i].match(/^(?=.*[A-Z])/)){
			long = (arr[i].length > long) ? arr[i].length : long;
		}
	}
	return long;
}