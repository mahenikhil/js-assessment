exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
	return fn.apply({},arr);
  },

  speak : function(fn, obj) {
	return fn.call(obj);
  },

  functionFunction : function(str) {
	return function(str2){
		return str+", "+str2;
	}
  },

  makeClosures : function(arr, fn) {
	var funcs=[]
	// This is a closure function
	var square =function(val){
		return function(){
			return val*val
		}
	} 
	for(var i=0;i<arr.length;i++){
		funcs.push(square(arr[i]));
	}
	return funcs;
	
  },

  partial : function(fn, str1, str2) {
	var slice = Array.prototype.slice,
        stored_args = slice.call(arguments, 1);
     return function () {
        var new_args = slice.call(arguments),
              args = stored_args.concat(new_args);
        return fn.apply(null, args);
     };
  },

  useArguments : function() {
	 var sum=0;
	 return Array.prototype.reduce.call(arguments,function(total,currentValue){
		 return total+currentValue
	 })
		
  },

  callIt : function(fn) {
	 var slice = Array.prototype.slice,
        stored_args = slice.call(arguments, 1);
	return fn.apply(null, stored_args);
  },

  partialUsingArguments : function(fn) {
	var slice = Array.prototype.slice,
        stored_args = slice.call(arguments, 1);
     return function () {
        var new_args = slice.call(arguments),
              args = stored_args.concat(new_args);
        return fn.apply(null, args);
     };
  },

  curryIt : function(fn) {
	var slice = Array.prototype.slice,
        stored_args = slice.call(arguments, 1);
     return function () {
        var new_args = slice.call(arguments),
              args = stored_args.concat(new_args);
        return fn.apply(null, args);
     };
  }
};
