export class Animal {

	constructor(tipo, pernas) {
		this.tipo = tipo;
		this.pernas = pernas;
	}

	falar(som = 'Qualquer som') {
		return som;
	}

	get dados() {
		return `Tipo: ${this.tipo}, Pernas: ${this.pernas}`;
	}

}

export class Gato extends Animal {

	constructor(pele, pernas) {
		super('Gato', pernas);

		this.pele = pele;
	}

	falar(som = 'Miau') {
		return som;
	}

	get cor() {
		return this.pele;
	}
}

export class cachorro extends Animal {

	constructor(pele, pernas) {
		super('Cachorro', pernas);

		this.pele = pele;
	}

	falar(som = 'Au au') {
		return som;
	}

	get cor() {
		return this.pele;
	}
}

export class passaro extends Animal {

	constructor(pele, pernas) {
		super('passaro', pernas);

		this.pele = pele;
	}

	falar(som = 'fiu fiu') {
		return som;
	}

	get cor() {
		return this.pele;
	}
}

