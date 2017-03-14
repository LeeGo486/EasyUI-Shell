(function(){

	var initEasyUIPins = {

		"textbox": function (tBoxs) {
			
			for (var i = 0, tBox; tBox= tBoxs[i++];) {

				tBox.id && $("#" + tBox.id).textbox(tBox);
			}
		},
		"passwordbox":function(pBoxs){
			
			for (var i = 0, pBox; pBox = pBoxs[i++];) {

				pBox.id && $("#" + pBox.id).passwordbox(pBox);
			}
		},
		"window":function(wins){

			var isOpen;

		    for (var i = 0, win; win = wins[i++];){

		    	isOpen = !!win.isOpen ? "open" : "close";

		    	win.id && $("#" + win.id).window(win).window(isOpen);
			}
		},
		"validatebox": function(vaildates){

			for (var i = 0, vaildate; vaildate < vaildates[i++];) {

				if(!!vaildate.rule){

					$.extend($.fn.validatebox.defaults.rules, vaildate.rule);
				}
				
				vaildate.id && $("#" + vaildate.id).validatebox(vaildate);
			}
		},
		"combo": function (combos) {
			
			for (var i = 0, combo; combo = combos[i++];) {
				
				combo.id && $("#" + combo.id).combo(combo);
			}
		},
		"combobox": function (cmBoxs) {
			
			for (var i = 0, cmBox; cmBox = cmBoxs[i++];) {
				
				cmBox.id && $("#" + cmBox.id).combo(cmBox);
			}
		},
		"numberbox":function(numBoxs){

			for (var i = 0, numBox; numBox = numBoxs[i++];) {
				
				numBox.id && $("#" + numBox.id).numberbox(numBox);
			}
		},
		"datebox":function(dateBoxs){

			var defaultFormat = function(date){
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				var d = date.getDate();
				return y + '-' + m + '-' + d;
			};

			var defaultParser = function(s){
				if (!s) return new Date();
	           	
	           	var ss = (s.split('-'));
	           	var y = parseInt(ss[0],10);
	           	var m = parseInt(ss[1],10);
	           	var d = parseInt(ss[2],10);
				
				if (!isNaN(y) && !isNaN(m) && !isNaN(d)){
				   return new Date(y,m-1,d);
				} else {
				   return new Date();
				}
			};

			for (var i = 0, dtBox; dtBox = dateBoxs[i++];) {
				
				var nowFormat = !! dtBox.format ? dtBox.format : defaultFormat;
				dtBox.formatter = nowFormat;
				dtBox.parser = defaultParser;

				dtBox.id && $("#" + dtBox.id).datebox(dtBox);
			}
		},
		"linkbutton":function(linkBtns){

			for (var i = 0, linkBtn; linkBtn = linkBtns[i++];) {
				
				linkBtn.id && $("#"+linkBtn.id).linkbutton(linkBtn);
				linkBtn.click && $("#"+linkBtn.id).bind("click",linkBtn.click);
				linkBtn.class && $("#"+linkBtn.id).addClass(linkBtn.class);
			}
		}
	};

	var setEuiPn = function (type, jo) {

		var _type = type.toLowerCase().replace(/^\s+|\s+$/g,"");

		initEasyUIPins[_type](jo);
	};

	window.crtEUIPins = window.crtEP = setEuiPn;

})(window);