var requestParser = function(req, data) {
  if (req.unparsedData) {
    // this data is really 'new data'
    data = req.unparsedData + data;
  }

  if (!req.method ) {

    // Fail on long invalid http method names
    if (data.length > 6 && !includesWhiteSpace(data))
      return false;

    // Waiting for space (more data required)
    if (!includesWhiteSpace(data))
      return req;

    // data has whitespace
    var separatedData = data.match(/^(.+)\s(.*)/);

    // guard against leading whitespace
    if (!separatedData) return false;

    var possibleHTTPMethod = separatedData[1];
    if (isHTTPMethod(possibleHTTPMethod)){
      req.method = possibleHTTPMethod;
      data = separatedData[2];
    } else {
      return false
    }
  }

  // parse url

  // parse HTTP protocol version

  // parse headers (one big string)

  // parse body if put / post

  if (data === '') {
    delete req.unparsedData;
  } else {
    req.unparsedData = data;
  }

  return req;
}

var isHTTPMethod = function(str) {
  return /^GET|DELETE|POST|PUT/.test(str);
}

var includesWhiteSpace = function(someStr) {
  return /\s/.test(someStr)
}


if (process.argv[1] === __filename) {

  var assert = require("assert")

  assert.deepEqual(false,
    requestParser({}, "DELETEBLAH")
  )

  assert.deepEqual({ method: "GET" },
    requestParser({}, "GET ")
  )

  assert.deepEqual({},
    requestParser({}, "GET")
  )

  assert.deepEqual(false,
    requestParser({}, "TEST ")
  )

  console.log('all tests passed :)')
}


