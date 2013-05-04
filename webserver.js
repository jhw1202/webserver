var net = require('net');

var receivedAllRequestData = function(someStr) {}
var handleRequest = function(requestStr, connection) {
  // write a response
  conn.destroy()
}

var server = net.createServer(function(conn) {

  console.log('new connection established');

  var requestData = '';

  conn.on('data', function(data) {
    requestData += data;
    if (receivedAllRequestData(requestData)) {
      handleRequest(requestData, conn);
    }
  })

  conn.on('end', function() {
    console.log('client closed connection for some reason');
    conn.destroy()
  });

});

server.listen(8080, function() {
  console.log('running on 8080');
});
