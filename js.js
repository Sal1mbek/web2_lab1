// // // console.log("Hello WEB-2")

// // // task 1
// // var http = require('http')
// // http.createServer(function(req, res){
// //     res.writeHead(200, {'Content-Type': 'text/plain'});
// //     res.end('Hello world!!!!!!!');    
// // }).listen(3000);
// // console.log("Server on local host: 3000")

// // // task 2
// // var http = require('http'); 
// // http.createServer(function(req,res){ // normalize url by removing querystring, optional 
// //     // trailing slash, and making it lowercase 
// //     var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
// //      switch(path) {
// //         case '':
// //             res.writeHead(200, { 'Content-Type': 'text/plain' });
// //             res.end('Homepage'); 
// //         break;
// //         case '/about':
// //             res.writeHead(200, { 'Content-Type': 'text/plain' });
// //             res.end('About'); 
// //         break; 
// //         default:
// //             res.writeHead(404, { 'Content-Type': 'text/plain' });
// //             res.end('Not Found'); 
// //         break; 
// //         }
// // }).listen(3000);
// // console.log('Server started on localhost:3000; press Ctrl-C to terminate....');

// // //task 3
// // var http = require('http');
// // var fs = require('fs');
// // function serveStaticFile(res, path, contentType, responseCode){
// //     if (!responseCode) responseCode = 200;
// //     fs.readFile(__dirname + path, function(err, data){
// //         if (err){
// //             res.writeHead(500, {'Content-Type': 'text/plain'});
// //             res.end('500-Internall Error');
// //         } else{
// //             res.writeHead(responseCode, {'Content-Type': contentType});
// //             res.end(data);
// //         }
// //     })
// // }
// // http.createServer(function(req,res){ // normalize url by removing querystring, optional 
// //     // trailing slash, and making lowercase 
// //     var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase(); 
// //     switch(path) {
// //         case '': serveStaticFile(res, '/public/home.html', 'text/html');
// //         break; 
// //         case '/about': serveStaticFile(res, '/public/about.html', 'text/html');
// //         break; 
// //         case '/img/logo.jpg': serveStaticFile(res, '/public/img/logo.jpg', 'image/jpeg');
// //         break;
// //         default: serveStaticFile(res, '/public/404.html', 'text/html', 404);
// //         break;        
// //     }
// // }).listen(3000);
// // console.log('Server started on localhost:3000; press Ctrl-C to terminate....');

// task 4
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
  } 
  // Covert JavaScript object into JSON string
  const bookJSON = JSON.stringify(book)
  // Covert JSON string into object
  const bookObject = JSON.parse(bookJSON)
  console.log(bookObject.title) // Print: Ego is the Enemy
  


// var http = require('http');
// var fs = require('fs');
// function serveStaticFile(res, path, contentType, responseCode){
//     if (!responseCode) responseCode = 200;
//     fs.readFile(__dirname + path, function(err, data){
//         if (err){
//             res.writeHead(500, {'Content-Type': 'text/plain'});
//             res.end('500-Internall Error');
//         } else{
//             res.writeHead(responseCode, {'Content-Type': contentType});
//             res.end(data);
//         }
//     })
// }
// http.createServer(function(req,res){ // normalize url by removing querystring, optional 
//     // trailing slash, and making lowercase 
//     var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase(); 
//     switch(path) {
//         case '': serveStaticFile(res, 'smile.html', 'text/html');
//         break; 
//         case '/about': serveStaticFile(res, '/public/about.html', 'text/html');
//         break; 
//         case '/img/logo.jpg': serveStaticFile(res, '/public/img/logo.jpg', 'image/jpeg');
//         break;
//         default: serveStaticFile(res, '/public/404.html', 'text/html', 404);
//         break;        
//     }
// }).listen(3000);
// console.log('Server started on localhost:3000; press Ctrl-C to terminate....');

