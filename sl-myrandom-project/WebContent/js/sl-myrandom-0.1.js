var sl_myrandom = function() {
	
	var private_var = 5;
	
	function private_log() {
		console.log(private_var);
	}
	
	return {
		mvar1 : "aaa",
		madd : function(var1,var2)
		{
			private_log();
			return var1+var2;
		}
		,
		msub : function(var1,var2)
		{
			return var1-var2;
		}
		,
		Apple : function (type) {
		    this.type = type;
		    this.color = "red";
		    this.getInfo = function() {
		        return 'Mine is a ' + this.color + ' ' + this.type + ' apple';
		    };
		}
	};
}();