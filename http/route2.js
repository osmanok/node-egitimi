const http = require('http');

const server = http.createServer((request, response) => {
    if(request.method === "GET"){
        if(request.url === "/")
            response.write("index");
        else if(request.url === '/iletisim')
            response.write("iletisim");
        else
            response.write("404");
    }

    response.end();
});

server.listen(3000);