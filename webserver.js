var net = require('net');

var isCompleteRequest = function(someStr) {

  // return true;
}
var handleRequest = function(requestStr, connection) {
  // write a response
  conn.destroy()
}

var server = net.createServer(function(conn) {

  console.log('new connection established');

  var requestData = '';

  conn.on('data', function(data) {
    console.log(data.toString())
    requestData += data;
    if (looksWrong(requestData)) {
      conn.destroy()
    }
    if (isCompleteRequest(requestData)) {
      handleRequest(requestData, conn);
    }
  })

  conn.on('end', function() {
    console.log('client closed connection for some reason');
    conn.destroy()
  });

});

// server.listen(8080, function() {
//   console.log('running on 8080');
// });

// isCompleteRequest()

console.log(looksWrong("GET / HTTP/1.1"))
console.log(looksWrong("TEST / HTTP/1.1"))
