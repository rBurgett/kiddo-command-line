/* jshint undef: true, unused: true, strict: true, devel: true */
/* global prompt, program, require, welcome, asciiArt */

var prompt = require('prompt');
var program = require('commander');

prompt.message = "";
prompt.delimiter = "";
prompt.start();

var welcome = {
	_childName : 'Riley Joy',
	_password : 'barn',
	parent : this,
	passwordPrompt : function() {
		console.log(' ');
		console.log('Enter your secret password.'.magenta.bold);
		console.log(' ');
		prompt.get({
			name:'password',
			description:'>'.red.bold
			}, function (err, result) {
				welcome.checkPassword(result.password);
			}
		);
	},
	checkPassword : function (password) {
		if (password === this._password) {
			welcome.drawAsciiArt();
			console.log('Hi,'.magenta.bold,'Riley Joy!'.magenta.bold);
		} else {
			this.passwordPrompt();
		}
	},
	getRandom : function (){
		return Math.floor(Math.random()*(1)+1);
	},
	drawAsciiArt : function () {
		var i;
		var art = asciiArt[0];
		for (i = 0; i < art.length; i = i + 1) {
			console.log(art[i].yellow.bold);
		}
	}
};

var asciiArt = [];
asciiArt.push([
	' ',
	'                 _______	',
	'               _/       \\\_',
	'              / |       | \\',
	'             /  |__   __|  \\',
	'            |__/((o| |o))\\__|',
	'            |      | |      |',
	'            |\\     |_|     /|',
	'            | \\           / |',
	'             \\| /  ___  \\ |/',
	'              \\ | \\ _ / | /',
	'               \\_________/',
	'                _|_____|_',
	'           ____|_________|____',
	'          /                   \\ ',
	' '
	]);

welcome.passwordPrompt();