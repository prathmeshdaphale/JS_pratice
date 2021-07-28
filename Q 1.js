var arr = [4,1,9,5,1];
		var lowest = arr[0];

		for(var i=1; i<arr.length; i++){
			if(arr[i] < lowest){
				lowest = arr[i];   
			}
		}

		console.log(lowest);