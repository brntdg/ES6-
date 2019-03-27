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