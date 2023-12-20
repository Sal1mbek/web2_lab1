var http = require('http');
var fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200;
  
    fs.readFile(__dirname + path, function (err, data) {
      if (err) {
        console.error(`Error reading file '${path}':`, err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 - Internal Error');
      } else {
        res.writeHead(responseCode, { 'Content-Type': contentType });
        res.end(data);
      }
    });
}
  

const server = http.createServer(function (req, res) {
const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

  switch (path) {
    case '':
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 - Internal Error: Empty path');
        break;
    case '/home':
        serveStaticFile(res, '/index.html', 'text/html');
        break;
    case '/smile': // Handle /home as well
        serveStaticFile(res, '/smile.html', 'text/html');
        break;
    case '/cry':
         serveStaticFile(res, '/crying.html', 'text/html');
        break;
    case '/json':
        if (req.method === 'POST') {
            // Обработка POST-запроса с данными о пользователе
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const postData = querystring.parse(body);
                const userData = { username: postData.username };
                // Отправка JSON-ответа с данными о пользователе
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(userData));
            });
        } else {
            // Отображение страницы, где требуется ввод имени
            serveStaticFile(res, '/json.html', 'text/html');
        }
        break;
    default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Not Found');
        break;
  }
});

const PORT = 3000;
server.listen(PORT, function () {
  console.log(`Server started on localhost:${PORT}; switch to your browser, reload it`);
});
