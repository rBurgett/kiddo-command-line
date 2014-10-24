/* jshint undef: true, unused: true, strict: true, devel: true */
/* global prompt, program, require, welcome, asciiArt */

var prompt = require('prompt');
//var program = require('commander');

prompt.message = "";
prompt.delimiter = "";
prompt.start();

var welcome = {
	_childName : 'Riley Joy',
	_password : 'barn',
	passwordPrompt : function() {
		console.log(' ');
		console.log('Please enter your secret password.'.magenta.bold);
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
			this.drawAsciiArt();
			console.log('Hi,'.magenta.bold,this._childName.magenta.bold + '!'.magenta.bold);
		} else {
			this.passwordPrompt();
		}
	},
	getRandomAsciiArt : function (){
		var max = asciiArt.length;
		return Math.floor(Math.random()*(max) + 1) - 1;
	},
	drawAsciiArt : function () {
		var i;
		var art = asciiArt[this.getRandomAsciiArt()];
		for (i = 0; i < art.length; i = i + 1) {
			console.log(art[i].yellow.bold);
		}
	}
};

var asciiArt = [];
asciiArt.push([
//	' ',
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