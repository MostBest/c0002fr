// jQuery старт
$(document).ready(function(){

function printError() {
	var login 				= $('#login'),
			password  		= $('#password'),
			errorMessage 	= {
				login: 		'<span id="login-error" class="login-error">Введите данные</span>',
				password: '<span id="password-error" class="password-error">Укажите пароль</span>'
			};

	if (login.val() == '' && password.val() == '') {
		login.addClass('error');
		// login.insertAfter(errorMessage.login);
		if ( $('.login-error').length == 0 ) {
			setTimeout(function(){
				login.focus();
				$(errorMessage.login).insertAfter(login);
			}, 200);
		}
	} else if (login.val() && password.val() == '') {
		password.addClass('error');
		if ( $('.password-error').length == 0  ) {
			setTimeout(function(){
				$(errorMessage.password).insertAfter(password);
			}, 200);			
		}
	}
}

$('input').keypress(function() {
	if ( $(this).val() ) {
		$(this).removeClass('error');
		$(this).siblings('span').remove();
	}
});

$( '.form' ).submit( function( e ) {
	printError();
	e.preventDefault();
});

});
// jQuery конец

// ванильный js старт
'use strict';

/*for (var i = 0; i < 10; i++ ) {
	for (var j = 0; j < i; j++ ) {
		
	}
}*/

/*window.onload = function() {

	function addError() {
		var login 				= document.getElementById('login'),
				password  		= document.getElementById('password'),
				loginErr 			= document.getElementById('login-error'),
				errorMessage 	= {
					login: 		'<span id="login-error" class="login-error">Введите данные</span>',
					password: '<span id="password-error" class="password-error">Укажите пароль</span>'
				};
		if ( !login.value && !password.value) {
			login.classList.add('input-error');
			if ( loginErr ) {
				setTimeout(function(){
					login.focus();
					//$(errorMessage.login).(login);
				}, 200);
			}
		}
	} 

	function inserError() {

	}

	document.getElementById('form').addEventListener('submit', function(event){
		addError();
    event.preventDefault();
  });
}*/
// ванильный js конец