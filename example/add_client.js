const client = require('../').client;

client.bind(54321);

setInterval(
	function(){
		client.addTask("send_email",{to:"q45hu@uwaterloo.ca", content:"Hello"})
	}
	,1000);
