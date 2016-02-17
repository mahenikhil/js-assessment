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

  }
};
