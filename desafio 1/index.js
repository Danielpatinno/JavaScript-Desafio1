// Classe de Usuarios
  class user {
    constructor(name,id,birthday,street,numberHouse,cep,current,transactions,date) {
      this.name = name;
      this.id = id;
      this.birthday = birthday;
      this.address = {
              street: street,
              numberHouse: numberHouse,
              zipCode: cep
              };
      this.registratioNumber = this.uuidv4(1);
      this.balanceCurrent = current;
      this.transactions = {
               transactions: transactions,
               dateLastTransactions: date
               };
   }
    // Functions para melhor interação com o usuario, pegando nome dele
    // Function para pegar o nome do Usuario para dar o retorno de boas vindas
  getNameUser(numer) {

    let userName = null;
    switch (numer) {
      case "0":
        userName = "Daniel";
        break;
      case "1":
        userName = "Fidel";
        break;
      case "2":
        userName = "Daniele";
        break;
      case "3":
        userName = "Jose Luis";
        break;
      default:
        break;
    }
    return userName;

  }
  // Function para gerar id para usuarios
  uuidv4() {

      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );

  }

  // Function para aceitar somente números em dados tipo número de registro e saldo, saque, depósito
  promptNum(question, tryAgain) {

    var msg = question;
    while (true) {
      var ret = parseInt(prompt(msg));
      if (!isNaN(ret)) return ret;
      msg = tryAgain;
    }

  }
  // Function para retornar a data e um swith no meio para retornar o mes, porque o JavaScript reconhece o mes de janeiro como o indice 0
  getmes() {

    const date = new Date();
    date.getFullYear();
    date.getDate();

    let month = null;
    switch (date.getMonth()) {
      case 0:
        month = "Janeiro";
        break;
      case 1:
        month = "Fevereiro";
        break;
      case 2:
        month = "Março";
        break;
      case 3:
        month = "Abril";
        break;
      case 4:
        month = "Maio";
        break;
      case 5:
        month = "Junho";
        break;
      case 6:
        month = "Julio";
        break;
      case 7:
        month = "Agosto";
        break;
      case 8:
        month = "Setembro";
        break;
      case 9:
        month = "Outubro";
        break;
      case 10:
        month = "Novembro";
        break;
      case 11:
        month = "Dezembro";
        break;
      default:
        this.erro();
        break;
    }
    return (
      "Ultima transação realizada dia " + date.getDate() + " do mes de " + month + " de " + date.getFullYear());
    }

  }

// Usuarios, os usuarios serão objetos contruidos apartir da classe user

  const user1 = new user("Daniel","10","29/09","Rua Amasonas","22","",1000,"");
  const user2 = new user("Fidel","11","27/08","Rua Amasonas","22","87160-000",1500,"");
  const user3 = new user("Daniele","12","26/08","Rua Amasonas","22","87160-000",2000,"");
  const user4 = new user("Jose Luis","14","14/06","Rua Hebe Camargo","481","87143-000",1600,"");

  const users = [user1, user2, user3, user4];

// Classe banco, onde irá erdar apenas nome da classe de usuarios que irá receber o nome do banco apenas e funções de gerente,cliente, etc

  class bank extends user {
    constructor(bank) {
      super();
    }

  // Function de boas vindas
  acess() {

    alert("Seja bem vindo ao Banco Patda");

    var accessOption = prompt(
      "Insira a opção desejada \n1 - Gerente \n2 - Usuario",
      ""
    );
    switch (accessOption) {
      case "1":
        this.manager();
        break;
      case "2":
        this.client();
        break;
      default:
        this.erro();
        break;
    }

  }

  // Function de acesso como gerente
  manager() {

    alert("Seja bem vindo Gerente");

    var actionManager = prompt(
      "Escolha uma das opções abaixo \n1 - Lista de Usuarios\n2 - Criar um usuario\n3 - Deletar um usuario",
      ""
    );
    switch (actionManager) {
      case "1":
        this.userlist();
        break;
      case "2":
        this.createUser();
        break;
      case "3":
        this.deleteUser();
        break;
      default:
        this.erro();
        break;
    }

  }

  // Function de lista de Usuarios
  userlist() {

    const actionList = prompt(
      "Deseja ver\n1 - Dados de todos os usuarios\n2 - Dados  de um usuario especifico"
    );
    switch (actionList) {
      case "1":
        console.log(users);
        break;
      case "2":
        var indexUser = prompt("Qual usuario você deseja acessar ?\n0 - Daniel\n1 - Fidel\n2 - Daniele\n3 - Jose Luis"
        );
        console.log(users[indexUser]);
        break;
      default:
        this.acess();
        break;
    }

  }

  // Function de criar um novo usuario
  createUser() {

      alert("Olá Gerente, vamos criar um novo usuario");

      const usercreat = new user(
      prompt("Por favot, Dígite um nome para o novo usuario"), //Aqui seria o argumento name
      this.promptNum("Número de identidade do cliente", "Você deve digitar um número \nPor favor, Tente novamente"
      ),//Aqui seria o argumento id
      prompt("Dígite a data de aniversário do cliente"), // Aqui seria o argumento birthday
      prompt("Nome da Rua do cliente"),//Aqui seria o argumento street
      this.promptNum("Número da casa do cliente","Você deve digitar um número \nPor favor, Tente novamente"),//Aqui seria o argumento numberHouse
      this.promptNum("CEP do novo usuario"),//Aqui seria o argumento zipCode
      "" //Argumento balance 
    );

    users.unshift(usercreat);

    let afterCreat = prompt(
      "Usuario criado com sucesso\nO seu usuario agora será o indice 0\nSe deseja voltar ao inicio,Dígite 1"
    );
    if (afterCreat === "1") {
      this.acess();
    } else {
      this.erro();
    }
  }

  // Function de deletar um usuario
  deleteUser() {

    var userdelet = prompt(
      "Qual usuario você deseja eliminar?\n0 - Daniel\n1 - Fidel\n2 - Daniele\n3 - Jose Luis"
    );

    users.splice(userdelet, 1);

    alert("Você deletou o usuario " + this.getNameUser(userdelet));
    let afterdelet = prompt(
      "Usuario deletado\nSe deseja voltar ao inicio,Dígite 1"
    );
    if (afterdelet === "1") {
      this.acess();
    } else {
      this.erro();
    }

  }
  // Function de acesso como cliente/Usuario
  client() {

    alert("Acesso como Usuario");

    const actionClient = prompt(
      "O que deseja fazer ?\n1 - Realizar um saque\n2 - Realizar um deposito\n3 - Consultar o Saldo"
    );
    switch (actionClient) {
      case "1":
        this.withdraw();
        break;
      case "2":
        this.deposit();
        break;
      case "3":
        this.consult();
        break;
      default:
        this.erro();
        break;
    }
  }

  // Function para saque
  withdraw() {

    var customerWithdrawal = prompt(
      "Olá seja bem vindo \nPor favor escolha um dos usuarios abaixo:\n0 - Daniel\n1 - Fidel\n2 - Daniele\n3 - Jose Luis",
      ""
    );
    var sacar = this.promptNum("Quanto deseja sacar ? ","Por favor, digite um numero.\nTente novamente.");

    users[customerWithdrawal].balanceCurrent =
    users[customerWithdrawal].balanceCurrent - sacar;
    users[customerWithdrawal].transactions.transactions = "Saque de " + sacar + " reais";
    users[customerWithdrawal].transactions.dateLastTransactions = this.getmes();
    
    alert("Você efetuou um saque\nSeu saldo atual é " + users[customerWithdrawal].balanceCurrent);

    var aftersaque = prompt("Deseja voltar ao inicio ? Dígite 1");
    if (aftersaque === "1") {
      this.acess();
    } else {
      this.erro();
    }
  }
  // Function para depósito
  deposit() {

    var customerDeposit = prompt("Olá seja bem vindo \nPor favor escolha um dos usuarios abaixo:\n0 - Daniel\n1 - Fidel\n2 - Daniele\n3 - Jose Luis",
      "");

    var deposito = this.promptNum(
      "Quanto deseja depositar ? ",
      "Por favor, digite um numero.\nTente novamente."
    );

    users[customerDeposit].balanceCurrent = users[customerDeposit].balanceCurrent + deposito;
    users[customerDeposit].transactions.transactions ="Depósito de " + deposito + " reais";
    users[customerDeposit].transactions.dateLastTransactions = this.getmes();

    alert("Você efetuou um deposito\nSeu saldo atual é " + users[customerDeposit].balanceCurrent
    );

    var afterdeposit = prompt("Deseja voltar ao inicio ? Dígite 1");
    if (afterdeposit === "1") {
      this.acess();
    } else {
      this.erro();
    }
  }
  // Function para consulta de saldo
  consult() {

    var query = prompt("Olá seja bem vindo \nPor favor escolha um dos usuarios abaixo:\n0 - Daniel\n1 - Fidel\n2 - Daniele\n3 - Jose Luis",
      "");

    alert(this.getNameUser(query) + " o seu saldo é " + users[query].balanceCurrent + " reais");
    var afterconsult = prompt("Deseja voltar ao inicio ? Dígite 1");
    if (afterconsult === "1") {
      this.acess();
    } else {
      this.erro();
    }
  }
  // Function para algum erro
  erro() {

    const result = prompt(
      "ATENÇÃO \nOpção inválida \nSe você deseja tentar novamente, Dígite 1\nSe você deseja cancelar, Dígite 2","");
    if (result === "1") {
      return this.acess();
    } else {
      return alert("Muito Obrigado por usar o Banco Patda");
    }
  }
  
}

  const banco = new bank("Banco Patda");
  banco.acess();
