/* jshint undef: true, unused: true, strict: true, devel: true */
/* global require */

var prompt = require('prompt');

var Welcome = {
	_name : 'name',
	_password : 'password',
	create : function (data) {
		'use strict';
		return Object.create(Welcome).init(data);
	},
	init : function(data) {
		'use strict';
		this._name = data.name;
		this._password = data.password;
		return this;
	},
	name : function() {
    'use strict';
		return this._name;
	},
	password : function() {
    'use strict';
		return this._password;
	}
};

var welcome = Welcome.create({
	name : 'Riley Joy',
	password : 'barn'
});
	
var passwordPrompt = function() {
  'use strict';
	console.log(' ');
	console.log('Please enter your secret password.'.magenta.bold);
	console.log(' ');
	prompt.get({
		name:'password',
		description:'>'.red.bold
		}, function (err, result) {
			if (result.password === welcome.password()) {
				asciiArt.drawRandom();
				console.log('Hi,'.magenta.bold,welcome.name().magenta.bold + '!'.magenta.bold);
			} else {
				passwordPrompt();
			}
		}
	);
};

var asciiArt = {
	_list : [],
	add : function(art) {
    'use strict';
		this._list.push(art);
	},
	drawRandom : function() {
    'use strict';
		var last = this._list.length;
		var random = Math.floor(Math.random()*(last) + 1) - 1;
		var art = this._list[random];
		this.draw(art);
	},
	draw : function(artArray) {
    'use strict';
		var i;
		for (i = 0; i < artArray.length; i = i + 1) {
			console.log(artArray[i].yellow.bold);
		}
	}
};
asciiArt.add([
//	' ',
	'                 _______	',
	'               _/       \\_',
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
asciiArt.add([
	'		____________________________',
	'		!\\_________________________/!\\',
	'		!!                         !! \\',
	'		!!                         !!  \\',
	'		!!                         !!  !',
	'		!!                         !!  !',
	'		!!                         !!  !',
	'		!!                         !!  !',
	'		!!                         !!  !',
	'		!!                         !!  /',
	'		!!_________________________!! /',
	'		!/_________________________\\!/',
	'		   __\\_________________/__/!_',
	'		  !_______________________!/',
	'		________________________',
	'	   /oooo  oooo  oooo  oooo /!',
	'	  /ooooooooooooooooooooooo/ /',
	'	 /ooooooooooooooooooooooo/ /',
	'	/C=_____________________/_/',
	'	' 
	]);
	
prompt.message = "";
prompt.delimiter = "";
prompt.start();
passwordPrompt();