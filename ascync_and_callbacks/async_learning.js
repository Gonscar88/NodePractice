// const p1 = Promise.resolve(1)
// p1
// 	.then(x => x + 5)
// 	.then(x => Promise.resolve(x+5))
// 	.then(x => Promise.reject("Error! Algo salio mal"))
// 	.then(x => console.log("Esta llamada no llega"))
// .catch(e => console.log(e));
// 
// const delayed = x => new Promise((resolve, reject) => setTimeout(() => resolve(x), 500));

// delayed(7)
// 	.then(x => {
// 		console.log(x)
// 		return delayed(x +  7)
// 	})
// 	.then(x => console.log(x))
// 	.then(x => Promise.reject("Hubo un error!!"))
// 	.catch(e => console.log(e));

// require('es6-promise').polyfill();
// require('isomorphic-fetch');

// fetch('https://jsonplaceholder.typicode.com/users')
// 	.then(x => x.json())
// 	.then(x => console.log(x));

// $.get('https://jsonplaceholder.typicode.com/users', (res) => {
// 	if(err) throw err;
// 	$.get('https://jsonplaceholder.typicode.com/posts', (res) => {

// 	})
// });

// Ejecutado con node
const fetch = require('node-fetch')

async function getNombre(username){
	const url = `https://api.github.com/users/${username}`;
	const respuesta = await fetch(url);
	const json = await respuesta.json();
	// console.log(json.name);
	if(respuesta.status !== 200){
		throw Error("El usuario no existe")
	}

	return json.name
}

(async function(){
	try{
		const nombre = await getNombre('gonscar88');
		console.log(nombre)
	}catch(error){
		console.log(`Error!! ${error}`);
	}
})()


// getNombre('personanoexiste')
// 	.then((nombre) => console.log(nombre))
// 	.catch((error)=> console.log(`${error}`));
