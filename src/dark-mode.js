'use strict';

const themeModeSwitch = document.querySelector('.theme_mode_switch');

// проверка поддержки браузером хранилища
if (typeof(Storage) == "undefined") {
	document.body.classList.add('no_dark_mode');
}

if (localStorage.getItem('darkMode') == 'dark') {
	darkMode();
}

themeModeSwitch.addEventListener('click', function () {
	if (themeModeSwitch.classList.contains('theme_mode_on')) {
		noDarkMode();
	} else {
		darkMode();
	}
});

function darkMode() {
	themeModeSwitch.classList.add('theme_mode_on');
	document.body.classList.add('dark_mode');
	localStorage.setItem('darkMode', 'dark');
}

function noDarkMode() {
	themeModeSwitch.classList.remove('theme_mode_on');
	document.body.classList.remove('dark_mode');
	localStorage.setItem('darkMode', 'light');
}