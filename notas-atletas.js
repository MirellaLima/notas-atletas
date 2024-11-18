// Crie uma aplicação capaz de receber o nome e as notas de um atleta, calcular a média e apresentar ao usuário.
class Atleta{

    constructor(atletas){
      this.nome = atletas.nome;
      this.notas = atletas.notas;
    };

    mostrarNotas(){
      let notasOrganizadas = this.notas.sort((a, b) => a - b);
      let notasIntermediarias = notasOrganizadas.slice(1, -1);
      let soma = 0;
      for (let i = 0; i < notasIntermediarias.length; i++) {
        soma += notasIntermediarias[i];
      }
      let media = soma / notasIntermediarias.length;


      console.log(`Atleta: ${this.nome} \n Notas Obtidas: ${this.notas} \n Média Válida: ${media}`);
    };

  }  

  let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
  ];

  atletas.forEach(function(atletaDados){
    let atleta = new Atleta(atletaDados);
    atleta.mostrarNotas();
  }) 

