const http = require('http');

http
  .createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
      console.error(err);
    }).on('data', (chunk) => {
      body.push(chunk);
      // Print Chunk
      console.log('Chunk:');
      console.log(chunk.toString());
    }).on('end', () => {
      // Print body
      body = Buffer.concat(body).toString();
      console.log('Completed body:');
      console.log(body);

      // Send Response
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write('OK');
      response.end();
    });
  })
  // Activates this server, listening on port 8080.
  .listen(8080);