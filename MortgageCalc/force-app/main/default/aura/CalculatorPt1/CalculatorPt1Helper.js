({
	moneyFormat : function(price) {
        	const sign = '$'
			var pieces = parseFloat(price).toFixed(2).split('')
            var ii = pieces.length - 3
        	while ((ii -= 3) > 0) {
            	pieces.splice(ii, 0, ',')
        	}
        	return sign + pieces.join('')
		},
})