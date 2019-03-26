let addEndereco = (endereco) => {
	const { cidade, estado } = endereco;

	const novoEndereco = {
		cidade,
		estado,
		pais:'Brazil'
	}

	const { pais } = novoEndereco;

	console.log(`${cidade}, ${estado}, ${pais}`);
}

addEndereco({cidade:'Santo André', estado:'São Paulo'});