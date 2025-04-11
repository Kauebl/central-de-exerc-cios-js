function exercicio01() {



    let idade = prompt("Digite sua idade")

    if (idade >= 18) {

        alert("Voce e maior de idade");

    } else {

        alert("Voce e menor de idade");


    }
    gerarlog("Exercicio de condicionais 01 execultado " + new Date() .toLocaleDateString());
}

function exercicio02() {



    let numero = prompt("Digite um numero")

    if (numero >= 0) {

        alert("O numero e positivo")

    } else {

        alert("O numero e negativo")

    }
    gerarlog("Exercicio de condicionais 02 execultado " + new Date() .toLocaleDateString());
}


function exercicio03() {


    let nota = prompt("Digite a nota do aluno")

    if (nota >= 60) {


        alert("Aprovado")

    } else {

        alert("Reprovado")
    }

    gerarlog("Exercicio de condicionais 03 execultado " + new Date() .toLocaleDateString());
}




function exercicio04() {

    debugger;

    let numero = prompt("Digite um numero")

    if (numero >= 0) {

        alert("O numero e positivo")

    } else {

        alert("O numero e negativo")

        alert("O numero e zero")

    }

    gerarlog("Exercicio de condicionais 04 execultado " + new Date() .toLocaleDateString());
}






function exercicio05() {


    let idade = prompt("Digite sua idade:");


    idade = parseInt(idade);


    if (isNaN(idade) || idade < 0) {
        alert("Idade inválida");
    } else if (idade <= 12) {
        alert("Você é uma Criança");
    } else if (idade >= 13 && idade <= 17) {
        alert("Você é um Adolescente");
    } else if (idade >= 18) {
        alert("Você é um Adulto");
    }
    gerarlog("Exercicio de condicionais 05 execultado " + new Date() .toLocaleDateString());
}




function exercicio06() {


    let numero = prompt("Digite um numero")


    if (numero % 2 == 0) {

        alert("O numero é par");

    } else {

        alert("o numero é impar");


    }


    gerarlog("Exercicio de condicionais 06 execultado " + new Date() .toLocaleDateString());
}




function exercicio07() {


    let n1 = Number(prompt("Digite um numero"))
    let n2 = Number(prompt("Digite um numero"))
    let operação = prompt("Digite a operação")

    if (operação == "+") {

        let resultado = n1 + n2
        alert(resultado)

    } else if (operação == "-") {

        let resultado = n1 - n2
        alert(resultado)


    } else if (operação == "*") {

        let resultado = n1 * n2
        alert(resultado)

    } else if (operação == "/") {

        let resultado = n1 / n2
        alert(resultado)
    }

    gerarlog("Exercicio de condicionais 07 execultado " + new Date() .toLocaleDateString());
}



function exercicio08() {

    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let num3 = parseFloat(prompt("Digite o terceiro número:"));


    if (num1 >= num2 && num1 >= num3) {
        alert(`O maior número é: ${num1}`);
    } else if (num2 >= num1 && num2 >= num3) {
        alert(`O maior número é: ${num2}`);
    } else {
        alert(`O maior número é: ${num3}`);
    }
    gerarlog("Exercicio de condicionais 08 execultado " + new Date() .toLocaleDateString());
}


function gerarlog(textoDoLog) {

    let logscontainer = document.querySelector(".logscontainer");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = textoDoLog;
    logscontainer.appendChild(paragraph);

}


