var nome = "Claudio Montenegro";
var email = "claudiobmontenegro@gmail.com";
var cpf = "12345678909";
var senha = "password123";
var senhaTentativa = "password123";

/* O nome deve ter mais de 5 caracteres e menos de 150 */
function validarNome(nome) {
  if (nome.length > 5 && nome.length < 150) {
    console.log(nome + " é um nome válido.");
  } else {
    console.log("Nome Inválido");
  }
}
validarNome(nome);

/* É preciso validar o email informado */
function validarEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase())) {
    console.log(email + " é um email válido.");
  } else {
    console.log("Email inválido.");
  }
}
validarEmail(email);

/* Validar CPF */
function validarCPF(cpf) {
  var Soma;
  var Resto;
  Soma = 0;
  if (cpf == "00000000000") return false;

  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(cpf.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(cpf.substring(10, 11))) return false;
  return true;
}
if (validarCPF(cpf) == true) {
  console.log(cpf + " CPF válido.");
} else if (validarCPF(cpf) == false) {
  console.log("CPF invalido.");
}


/* A senha precisa conter mais de 8 caracters e ser igual a senha comparada */
function validarSenha(senha, senhaTentativa) {
    if (senha.length >=8) {
      console.log(senha + " senha valida.");
    } else{
      console.log("Senha inválida.");
    }

    if(senha == senhaTentativa){
        console.log("As senhas são iguais.");
    }else{
        console.log("As senhas tentadas são diferentes.");
    }
  }
  validarSenha(senha,senhaTentativa);