// Definição da classe Heroi
class Heroi {
  // Construtor da classe que recebe as propriedades do herói
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método que exibe a mensagem de ataque com base no tipo do herói
  atacar() {
    let ataque;

    // Define o tipo de ataque com base no tipo do herói
    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'ataque desconhecido';
    }

    // Exibe a mensagem de ataque
    print(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando instâncias da classe Heroi
const heroi1 = new Heroi('Gandalf', 300, 'mago');
const heroi2 = new Heroi('Conan', 35, 'guerreiro');
const heroi3 = new Heroi('Jet Li', 50, 'monge');
const heroi4 = new Heroi('Naruto', 20, 'ninja');

// Chamando o método atacar para cada herói
heroi1.atacar(); // Exibe: O mago atacou usando magia
heroi2.atacar(); // Exibe: O guerreiro atacou usando espada
heroi3.atacar(); // Exibe: O monge atacou usando artes marciais
heroi4.atacar(); // Exibe: O ninja atacou usando shuriken
