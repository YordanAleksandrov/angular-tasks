'use strict';

angular.
  module('loginform').
	component('loginForm', {
		
		templateUrl:'loginform/loginform.template.html',
		controllerAs: 'login',
		controller: function loginformController() {
			
			
			login.credentials_check = function(){
			
			var error = angular.element(error_msg);
			console.log(error);
			console.log(username);
			if (login.username=='' || login.username==undefined){
				
				error.css("visibility","visible");
				if($('.error_message').length>0){
					
					error_message.remove();
					error.append("<p class='error_message' id='error_message'>"+login.error_msg.errors[0].message+"</p>");
					
				}else error.append("<p class='error_message' id='error_message'>"+login.error_msg.errors[0].message+"</p>");
				login.pass='';
				
				
			}
			
			else if(login.validateEmail(login.username)==true){

				if(login.username == login.credentials.email && login.pass == login.credentials.pass ){
				
					login.logistics();
					error.css("visibility","hidden");
								
				}
				else {
					
					error.css("visibility","visible");
					if($('.error_message').length>0){
					
						error_message.remove();
						error.append("<p class='error_message' id='error_message'>"+login.error_msg.errors[1].message+"</p>");
					
					}else error.append("<p class='error_message' id='error_message'>"+login.error_msg.errors[1].message+"</p>");
					login.pass='';
									
				};
			}
			else{

				error.css("visibility","visible");
				if($('.error_message').length>0){
					
					error_message.remove();
					error.append("<p class='error_message' id='error_message'>"+login.error_msg.errors[2].message+"</p>");
					
				}else error.append("<p class='error_message' id='error_message'>"+login.error_msg.errors[2].message+"</p>");
				login.pass='';
				
			}; 
		

		};
		}
	
	});