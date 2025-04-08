function exercicio01() {



    let idade = prompt("Digite sua idade")

    if (idade >= 18) {

        console.log("Voce e maior de idade");

    } else {

        console.log("Voce e menor de idade");


    }
}

function exercicio02() {



    let numero = prompt("Digite um numero")

    if (numero >= 0) {

        console.log("O numero e positivo")

    } else {

        console.log("O numero e negativo")

    }
}

function exercicio03() {


    let nota = prompt("Digite a nota do aluno")

    if (nota >= 60) {


        alert("Aprovado")

    } else {

        alert("Reprovado")
    }


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
}

function exercicio06() {


    let numero = prompt("Digite um numero")


    if (numero % 2 == 0) {

        alert("O numero é par");

    } else {

        alert("o numero é impar");


    }




}


function exercicio07() {


    let n1 = print("Digite um numero")
    let n2 = print("Digite um numero")
    let operação = ("Digite a operação")

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

}

exercicio07()