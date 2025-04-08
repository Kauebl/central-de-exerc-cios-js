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
exemploDowhile()