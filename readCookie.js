// $ npm install cookie 한후

const http = require('http');
let cookie = require('cookie');
http.createServer(function(request, response){
    console.log(request.headers.cookie);
    let cookies = {};
    if(request.headers.cookie !== undefined){
        cookies = cookie.parse(request.headers.cookie);
    }
    console.log(cookies.yummy_cookie);
    response.writeHead(200, {
        'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']
    });
    response.end('Cookie!!');
}).listen(3000);