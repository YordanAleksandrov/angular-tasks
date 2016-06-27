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
		
		$scope.tabs = [{
            title: 'Вход',
            url: 'loginform/loginform.template.html'
        }, {
            title: 'Забравена парола',
            url: 'passwordResetForm/passwordReset.template.html'
        }
		];
		
		self.Logistics = function(){
			
			self.username = '';
			self.pass = '';
			self.username_reset = '';
			
		}
		self.showLogin=function(){

			self.overlay = true;
			self.title = $scope.tabs[0].title;
			$scope.currentTab = $scope.tabs[0].url;
			self.Logistics();
			
		}
		self.closeLogin = function (){
			
			self.overlay = false;
			self.title = $scope.tabs[1].title;
			$scope.currentTab = $scope.tabs[1].url;
			self.Logistics();
			
		}
		

		$scope.onClickTab = function (tab) {
			
			self.Logistics();
			
			if(self.title == $scope.tabs[0].title){
				
				self.title = $scope.tabs[1].title;
				
			}
			else if(self.title == $scope.tabs[1].title){ 
			
				self.title = $scope.tabs[0].title;
				
			}
			$scope.currentTab = tab.url;
			
		}
		
		$scope.isActiveTab = function(tabUrl) {
			
			return tabUrl == $scope.currentTab;
			
		}
		self.validateEmail = function (email) {
			
			var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ig;
			
			return re.test(email);
	
		};
		
		$scope.credentials_check = function(){
			
			var error = angular.element(error_msg);
			
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
				
					error.css("visibility","hidden");
					self.overlay = false;			
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
		
		$scope.passwordResetCheck = function(){
			
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
				
					self.title = $scope.tabs[0].title;
					self.username_reset ='';
					error_reset.css("visibility","hidden");
					$scope.currentTab = $scope.tabs[0].url;
					
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