var idade = 20;
var sexo = "F";

    if(idade >= 18 && sexo == "M"){
        console.log("Entra no bar com taxa.");
    }else if (idade < 18 && sexo == "M"){
        console.log("Não entra no bar.");
    }else if (idade >= 18 && sexo =="F"){
        console.log("Entra no bar sem taxa.")
    }else if (idade < 18 && sexo =="F"){
        console.log("Não entra no bar.")
    }