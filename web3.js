const http = require('http');
const fs = require('fs');
const port = 3000;
const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader("Context-type","text/html")
   switch (req.url) {
    case "/":
        fs.readFile("index.html", (err, data)=>{
            if(err) {
                console.error(err)
            }
            else {
                res.writeHead(200);
                res.write(data);
                res.end();
            }
        })
        break;
        case "/login":
            fs.readFile("login.html", (err, data)=>{
                if(err) {
                    console.error(err)
                }
                else {
                    res.writeHead(200);
                    res.write(data);
                    res.end();
                }
            })
            break;
        case "/contact":
        fs.readFile("contact.html", (err, data)=>{
            if(err) {
                console.error(err)
            }
            else {
                res.writeHead(200);
                res.write(data);
                res.end();
            }
        })
        break;
        default :
        res.writeHead(404);
        res.write("<h1>404 - Not found </h1>");
        res.end()
   }
});
server.listen(port, () => {
    console.log("Server is running at http://localhost:" +port);
})