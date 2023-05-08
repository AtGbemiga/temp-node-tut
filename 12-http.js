const http = require('http')

const server = http.createServer((req, res)=> {
    console.log(req);
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('Welcome to our about page')
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(
            `<h1>Page not found</h1>
            <a href="/">Home</a>`
        );
    }
});

server.listen(5000);
