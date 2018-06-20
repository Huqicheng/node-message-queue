const udpClient = require('dgram').createSocket('udp4');

var clients= {};

udpClient.on('message', (message, socket) => {
  var repMsg="";
  var msgObj= JSON.parse(message.toString());
  if(msgObj["get_service"] != null) {
    if(clients[msgObj["get_service"]] != null &&clients[msgObj["get_service"]].length> 0) {
        repMsg = clients[msgObj["get_service"]].shift();
    }
  }
  else {
    console.log(msgObj);
    var to =msgObj["service"];
    var msg =msgObj["body"];
    if(clients[to] == null) {
         clients[to] = new Array();
    }
    clients[to].push(message.toString());
      epMsg = "1";
  }
  var buf = new Buffer(repMsg);
  udpClient.send(buf, 0, buf.length, socket.port, socket.address);

});


module.exports = udpClient;
 

