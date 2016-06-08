'use strict';

angular.
  module('popup').
  component('popUp', {
    templateUrl:'Popup/popup.template.html',
	controllerAs: 'self',
    controller:['$scope','$http', function popupController($scope,$http) {
		
		var self = this;
		
		$http.get('services/registration-error.json').then(function(response_error) {
        self.error_msg = response_error.data; });
		
		$http.get('js/credentials.json').then(function(response_cred) {
        self.credentials = response_cred.data; });
		
		self.showLogin=function(){

			self.overlay = true;
			self.title='Вход';
			
		}
		self.closeLogin = function (){
			
			self.overlay = false;
			
		}
		
		self.validateEmail = function (email) {
			
			var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ig;
			
			return re.test(email);
	
		};
		
		$scope.tabs = [{
            title: 'One',
            url: 'loginform/loginform.template.html'
        }, {
            title: 'Two',
            url: 'passwordResetForm/passwordReset.template.html'
        }
		]

		$scope.currentTab = 'loginform/loginform.template.html';

		$scope.onClickTab = function (tab) {
			
			self.username = '';
			self.username_reset = '';
			self.pass = '';
			if(self.title == 'Вход'){
				
				self.title = 'Забравена Парола';
				
			}
			else if(self.title == 'Забравена Парола'){ 
			
				self.title = 'Вход';
				
			}
			$scope.currentTab = tab.url;
			
		}
		
		$scope.isActiveTab = function(tabUrl) {
			
			return tabUrl == $scope.currentTab;
			
		}
		
		
		
		self.passwordResetCheck = function(){
			
			var error_reset = angular.element(error_msg_reset);
			
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
    }]
  });