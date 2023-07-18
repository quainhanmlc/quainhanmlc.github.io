const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader("Context-type","text/html")
   switch (req.url) {
    case "/":
        fs.readFile("home.html", (err, data)=>{
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
        case "/hn":
            fs.readFile("ha_noi.html", (err, data)=>{
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
        case "/dn":
            fs.readFile("da_nang.html", (err, data)=>{
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
        case "/hcm":
        fs.readFile("Ho_Chi_Minh.html", (err, data)=>{
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
        case "/ct":
        fs.readFile("can_tho.html", (err, data)=>{
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