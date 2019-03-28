async function requisitar() {
	const url = 'https://alunos.b7web.com.br/api/ping';

	const r = await fetch(url);
	const json = await r.json();

	console.log(json);

	console.log("alguma coisa");


}

requisitar();