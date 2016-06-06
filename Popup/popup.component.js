'use strict';

angular.
  module('popup').
  component('popUp', {
    templateUrl:'Popup/popup.template.html',
	controllerAs: 'self',
    controller: function popupController($http) {
		
		var error = angular.element(error_msg);
		var error_reset = angular.element(error_msg_reset);
		var self=this;
		self.titles='Вход';
		
		$http.get('services/registration-error.json').then(function(response_error) {
        self.error_msg = response_error.data; });
		
		$http.get('js/credentials.json').then(function(response_cred) {
        self.credentials = response_cred.data; });
		
		self.logistics = function(){
			
			self.overlay=false;
			self.username='';
			self.pass='';
			
		};
		self.LoginForm = function() {
			
			self.myform = false;
			self.myform_password_reset = false;
			self.username='';
			self.pass='';
			error.css("visibility","hidden");
			self.titles='Вход';
		};
		self.passwordReset= function() {
			
			self.myform = true;
			self.myform_password_reset = true;
			self.username='';
			self.pass='';
			error.css("visibility","hidden");
			self.titles='Забравена парола';
		};
		
		self.showLogin = function showLogin(){
		
			self.overlay = true;
			self.titles='Вход';
			
		};
		self.closeLogin = function (){
			
			self.logistics();
			error.css("visibility","hidden");
			self.titles='Вход';
		
		};
		
		
		self.validateEmail = function (email) {
			
			var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ig;
			
			return re.test(email);
	
		};

		self.credentials_check = function(){
			
			if (self.username=='' || self.username==undefined){
				
				error.css("visibility","visible");
				if($('.error_message').length>0){
					
					error_message.remove();
					error.append("<p class='error_message' id='error_message'>"+self.error_msg.errors[0].message+"</p>");
					
				}else error.append("<p class='error_message' id='error_message'>"+self.error_msg.errors[0].message+"</p>");
				self.pass='';
				
				
			}
			
			else if(self.validateEmail(self.username)==true){

				if(self.username == self.credentials.email && self.pass == self.credentials.pass ){
				
					self.logistics();
					error.css("visibility","hidden");
								
				}
				else {
					
					error.css("visibility","visible");
					if($('.error_message').length>0){
					
						error_message.remove();
						error.append("<p class='error_message' id='error_message'>"+self.error_msg.errors[1].message+"</p>");
					
					}else error.append("<p class='error_message' id='error_message'>"+self.error_msg.errors[1].message+"</p>");
					self.pass='';
									
				};
			}
			else{

				error.css("visibility","visible");
				if($('.error_message').length>0){
					
					error_message.remove();
					error.append("<p class='error_message' id='error_message'>"+self.error_msg.errors[2].message+"</p>");
					
				}else error.append("<p class='error_message' id='error_message'>"+self.error_msg.errors[2].message+"</p>");
				self.pass='';
				
			}; 
		

		};
		
		self.passwordResetCheck = function(){
			
			if (self.username_reset=='' || self.username_reset==undefined){
				
				error_reset.css("visibility","visible");
				if($('.error_message').length>0){
					
					error_message.remove();
					error_reset.append("<p class='error_message' id='error_message'>"+self.error_msg.errors[0].message+"</p>");
					
				}else error_reset.append("<p class='error_message' id='error_message'>"+self.error_msg.errors[0].message+"</p>");
				
			}
			else if(self.validateEmail(self.username_reset)==true){

				if(self.username_reset == self.credentials.email){
				
					self.myform = false;
					self.myform_password_reset = false;
					self.titles='Вход';
					self.username_reset ='';
					error_reset.css("visibility","hidden");
					
				}
				else {
					
					error_reset.css("visibility","visible");
					if($('.error_message').length>0){
					
						error_message.remove();
						error_reset.append("<p class='error_message' id='error_message'>"+self.error_msg.errors[3].message+"</p>");
					
					}else error_reset.append("<p class='error_message' id='error_message'>"+self.error_msg.errors[3].message+"</p>");
									
				};
			}
			else{

				error_reset.css("visibility","visible");
				if($('.error_message').length>0){
					
					error_message.remove();
					error_reset.append("<p class='error_message' id='error_message'>"+self.error_msg.errors[2].message+"</p>");
					
				}else error_reset.append("<p class='error_message' id='error_message'>"+self.error_msg.errors[2].message+"</p>");
				
			}; 

		};
    }
  });