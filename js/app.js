const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const basePath = path.join(__dirname, '..'); // Root of your project

const server = http.createServer(function(req, res) {
    // Build the file path based on the request URL
    const filePath = path.join(basePath, req.url === '/' ? 'index.html' : req.url);
    const extname = path.extname(filePath);

    // Set default content type
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
        case '.ico':
            contentType = 'image/x-icon';
            break;
    }

    // Read and serve the file
    fs.readFile(filePath, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.end('Error: File not found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(port, function(error) {
    if (error) {
        console.log("Something went wrong", error);
    } else {
        console.log("Server is listening on port " + port);
    }
});
