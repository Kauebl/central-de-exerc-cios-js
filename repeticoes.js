function exemplofor() {
    //  for
    // 1 = declarar contador
    // 2 = condição (enquanto)
    // 3 = incremento
    for (let contador = 1; contador <= 5; contador++) {

        alert(contador)


    }
}

function exemplowhile() {

    let contador = 1;

    while (contador <= 5) {

        console.log(contador);
        contador++
    }
}

function exemploDowhile() {

    let contador = 1;
    do {

        alert(contador);
        contador++



    } while (contador <= 5);

}

function exercicio01rep() {

    for (let contador = 1; contador <= 10; contador++) {

        alert(contador)


    }
}

function exercicio02rep() {

    let numero = prompt("Digite um numero")

    for (let contador = 1; contador <= 10; contador++) {

        alert(contador * numero)
    }


}


// // Solicitar ao usuário que insira um número
// const N = parseInt(prompt("Digite um número:"));

// // Inicializar as variáveis
// let soma = 0;
// let i = 1;

// // Usar um loop `while` para somar os números de 1 a N
// while (i <= N) {
//     soma += i;
//     i++;
// }

// // Exibir o resultado
// console.log(`A soma dos números de 1 a ${N} é: ${soma}`);
// alert(`A soma dos números de 1 a ${N} é: ${soma}`);



function exercicio04rep() {


    for (let i = 2; i <= 50; i += 2) {
        console.log(i)

    }


}


function exercicio05rep() {


    let numeroAleatorio = Math.floor(Math.random() * (100 - 1) + 1)

    let tentativa;

    while (tentativa != numeroAleatorio) {

        tentativa = prompt("Insira um numero")


            if (numeroAleatorio > tentativa) {
                alert("Numero aleatoria e maior")

            } else if (numeroAleatorio < tentativa) {

                alert("Numero aleatorio e menor")

            } else {
                alert("voce acertou")
            }


          

        }
       
        
        
    }
   
