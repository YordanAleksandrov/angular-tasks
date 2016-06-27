angular.
	module('logic').service('PopupControl',function($rootScope){
		
		this.something='hello';
		this.overlay= false;
		this.showLogin = function (){
		
			this.overlay= true;
			this.something = 'hello from the other side';
			
		}

	});
	
