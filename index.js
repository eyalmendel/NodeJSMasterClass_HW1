/**
 * HW assignment - RESTful API
 * Author: Eyal Mendel
 * E-mail: eyalmendel@gmail.com
 */

 const http = require('http');
 const url = require('url');
 const router = require('./router');
 const config = require('./config');


 var server = http.createServer((req, res) => {
    requestHandler(req, res);
 });

 server.listen(config.port, () => {
    console.log("start listening on port: " + config.port);
 });

 requestHandler = function(req, res) {
    var parsedUrl = url.parse(req.url, true);
    var path = parsedUrl.pathname;
    var routeEntry = path.replace(/^\/+|\/+$/g, "");

    req.on('data', (data) => {
        console.log('data recieved');
    });

    req.on('end', () => {
        var handler = typeof(router.routs[routeEntry]) !== 'undefined'
        ? router.routs[routeEntry]
        : router.routs['notFound'];

        handler((statusCode, message) => {
            var msg = typeof(message) == 'object'
            ? message
            : {};

            msg = JSON.stringify(msg);

            // returning the response
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode);
            res.end(msg);

            // logging
            console.log("Returning this response: ", statusCode, msg);
        });
    });
 };
