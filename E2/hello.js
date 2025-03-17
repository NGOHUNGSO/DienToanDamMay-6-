const http = require("http");

const hostname = "localhost";
const port = 2300;//dùng nodemon hello.js
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(
        "<h1>Hello World</h1><p>This is a HTML response</p><ol><li>One</li><li>Two</li><li>Three</li></ol><h3>Enter http://localhost:2300/home or /about<h3>"
        );
    switch (req.url) {
        case "/home":
            res.end("<h1>This is Home page</h1>");
            break;
        case "/about":
            res.end("<h1>This is About page</h1>");
            break;
        default:
            res.statusCode = 404;  // Trả về mã lỗi 404 nếu đường dẫn không hợp lệ
            res.end("<h1>404 - Page Not Found</h1>");
            break;
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
