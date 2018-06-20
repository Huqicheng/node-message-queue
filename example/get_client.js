const client = require('../').client;

client.bind(54322);

setInterval(
	function(){
		client.getTask("send_email");
	},
	1000);
