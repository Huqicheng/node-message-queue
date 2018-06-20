const udpClient = require('dgram').createSocket('udp4');

udpClient.on('message', function(msg, rinfo){
  console.log('recv %s(%d) from server\n', msg, msg.length);
});

udpClient.on('error', function(err){
  console.log('error, msg - %s, stack - %s\n', err.message, err.stack);
});


udpClient.addTask = function (name,body){//send to server
	var msg = {service:name,body: body};
	var buf = new Buffer(JSON.stringify(msg));
	this.send(buf, 0, buf.length, 5555, "localhost");
}

udpClient.getTask = function (name){
	var msg = {get_service:name};
	var buf = new Buffer(JSON.stringify(msg));
	this.send(buf, 0, buf.length, 5555, "localhost");
}
module.exports = udpClient;
