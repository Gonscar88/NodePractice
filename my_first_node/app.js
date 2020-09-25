// const {frutas, dinero} = require('./frutas')

// frutas.forEach(
//     item => {
//         console.log(item);
//     }
// )

// console.log(dinero)

// var cowsay = require('cowsay');

// console.log(
// 	cowsay.say({
// 		text: "Moooodule",
// 		// cow: cows.SQUIRREL,
// 		e: "PP",
// 		T: "U",
// 		f: "broken-heart"
// 	})
// )

const http = require('http');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((request, response) => {
	response.statusCode = 200;
	response.setHeader("Content-Type", "text/plain");
	response.end(`Hello from NodeJS`);
});


server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`)
});


