function addEndereco(endereco) {
	const novoEndereco = {
		cidade:endereco.cidade,
		estado:endereco.estado,
		pais:'Brazil'
	}

	console.log(novoEndereco.cidade+" "+novoEndereco.estado+" "+novoEndereco.pais);
}

addEndereco({cidade:'Santo André', estado:'São Paulo'});