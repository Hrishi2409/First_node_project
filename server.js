var http = require("http");
var fs = require("fs");

// var app = http.createServer(function(request, response){
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     response.write("<h2>Welcome to Node.js</h2>");
//     response.end();
// });

// app.listen(8080);
// console.log(`Server Started : http://127.0.0.1:8080`);

var app = http.createServer(function(req,res){
    if(req.url==='/')
    {
        fs.readFile('index.html',function(err,data){
            if(!err){
                res.writeHead(200,{
                    'Content-Type': 'text/html'
                });
                res.write(data);
                res.end;
            }
        });
    }
    else if (req.url==='/about')
    {
        fs.readFile('about.html',function(err,data){
            if(!err)
            {
                res.writeHead(200,{
                    'Content':'text/html'
                });
                res.write(data);
                res.end;
            }
        });
    }
    else if (req.url==='/contact-me')
    {
        fs.readFile('contact-me.html',function(err,data){
            if(!err)
            {
                res.writeHead(200,{'Content':'text/html'});
                res.write(data);
                res.end
            }
        });
    }
     else {
            fs.readFile('404.html',function(err,data){
                if(!err)
                {
                    res.writeHead(200,{'Content':'text/html'});
                    res.write(data);
                    res.end;
                }
            });
    }
});

app.listen(8080);
console.log(`server started : http://127.0.0.1:8080`);