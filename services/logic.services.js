angular.
	module('logic').factory('PopupControl',function(){
		
		
		return {
			
			showLogin:function showLogin(overlay){
			
				overlay = true;
				
			},
			closeLogin:function (username,pass,overlay){
				
				overlay=false;
				username = '';
				pass='';
				popup.error.css("visibility","hidden");
			
			}
		}

		
	});
