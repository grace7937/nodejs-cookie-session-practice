var http = require('http');
var cookie = require('cookie');
http.createServer(function(request, response){
    console.log(request.headers.cookie);
    var cookies = {};
    if(request.headers.cookie !== undefined){
        cookies = cookie.parse(request.headers.cookie);
    }
    console.log(cookies.yummy_cookie);
    response.writeHead(200, {
        'Set-Cookie':[
            'yummy_cookie=choco', 
            'tasty_cookie=strawberry',
            `Permanent=cookies; Max-Age=${60*60*24*30}`. // <-- 이것만 새로운 코드 이렇게 permanent cookie 만들면됨
        ]
    });
    response.end('Cookie!!');
}).listen(3000);