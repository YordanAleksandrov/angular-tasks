'use strict';

angular.
  module('popup').
  component('popUp', {
    templateUrl:'Popup/popup.template.html',
	controllerAs: 'popup',
    controller: function popupController() {
		
		var popup = this;
		
		popup.logistics = function(){
			
			popup.overlay=false;
			self.username='';
			self.pass='';
			
		}
		popup.showLogin = function showLogin(){
		
			popup.overlay = true;
			
		};
		popup.closeLogin = function (){
			
			popup.overlay=false;
			self.logistics();
			error.css("visibility","hidden");
		
		};
		
    }
  });