exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
	return {
		then:function(fn){
			fn(value);
		}
	}
  },

  manipulateRemoteData : function(url) {
	var xhttp = new XMLHttpRequest();
	
	
	return {
		then :function(fn){
			xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				var obj=JSON.parse(xhttp.response);
			    fn(obj.people.map(function(person){
					return person.name;
				}).sort());
			}
		  };
			xhttp.open("GET", url, true);
			xhttp.send();
		}
	}
  }
};
