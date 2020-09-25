// https://jsonplaceholder.typicode.com/users/1
// const getNombre = (idPost) => {
// 	fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
// 		.then(res => res.json())
// 		.then(post => {
// 			console.log(post.userId);
// 			fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
// 				.then(usuario => usuario.json())
// 				.then(usuario => console.log(usuario.name))
// 		})
// }

// getNombre(80);



// const getNombreAsync = async (idPost) => {
// 	try{
// 		const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
// 		const post = await resPost.json();
// 		console.log(post)
// 		const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
// 		const user = await resUser.json();
// 		console.log(user);
// 	}catch (error){
// 		console.log(error);
// 	}
// }

// getNombreAsync(80)

const getNombreAxios = async (idPost) => {
	try{
		const resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
		console.log(resPost.data.userId);
		const resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
		console.log(resUser.data.name);

	}catch (error){
		console.log(error);
	}
}

getNombreAxios(80)




