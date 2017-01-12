function string(S){
	//Regular expression /[0-9]/g matches any number.
	var password = S.replace(/[0-9]/g, " ");
	var substring = password.split(" ");
	var longest = -1;

	//Regular expression /^(?=.*[A-Z])/ matches any upper case from A to Z.
	substring.forEach(function(element){
		let upperCase = /^(?=.*[A-Z])/;

		if(element.match(upperCase)){
			longest = (element.length > longest) ? element.length : longest;
		};

	});

	return longest;
}
	