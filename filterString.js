function string(S){
	var password = S.replace(/[0-9]/g, " ");
	var substring = password.split(" ");
	var longest = -1;

	substring.forEach(function(element){
		let upperCase = /^(?=.*[A-Z])/;

		if(element.match(upperCase)){
			longest = (element.length > longest) ? element.length : longest;
		};

	});
	return longest;
};
	