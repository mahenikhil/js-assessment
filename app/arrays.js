exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
	return arr.indexOf(item);
  },

  sum : function(arr) {
	return arr.reduce(function(total,num){
		return total+num
	})
  },

  remove : function(arr, item) {
	for (var i = arr.length; i--;) {
		if (arr[i] === item) {
			arr.splice(i, 1);
		}
	}
	return arr;
  },

  removeWithoutCopy : function(arr, item) {
	for (var i = arr.length; i--;) {
		if (arr[i] === item) {
			arr.splice(i, 1);
		}
	}
	return arr;
  },

  append : function(arr, item) {
	var tempArray=[item]
	return arr.concat(tempArray);
	 
  },

  truncate : function(arr) {
	return arr.splice(0,arr.length-1)
  },

  prepend : function(arr, item) {
	var tempArray=[item]
	return tempArray.concat(arr);
  },

  curtail : function(arr) {
	return arr.splice(1,arr.length-1)
  },

  concat : function(arr1, arr2) {
	return arr1.concat(arr2)
  },

  insert : function(arr, item, index) {
	arr.splice(index,0,item)
	return arr;
  },

  count : function(arr, item) {
	var result = 0;
	for(var obj in arr)
	  if(arr[obj] == item)
	   result++;
	 return result;
  },

  duplicates : function(arr) {
	var uniqueElements = [], duplicateElements = [], prev;
    
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            uniqueElements.push(arr[i]);
        }else{
			if(duplicateElements.indexOf(arr[i])==-1)
				duplicateElements.push(arr[i])
		}
		prev=arr[i]
        
    }
    
    return duplicateElements;
  },

  square : function(arr) {
	return arr.map(function(item){
		return item*item
	})
  },

  findAllOccurrences : function(arr, target) {
	  var occurences=[]
	arr.map(function(value,index){
		if(value==target){
			occurences.push(index);
		}
	});
	return occurences;
  }
};
