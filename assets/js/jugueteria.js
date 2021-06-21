var payasos = parseInt(prompt("Ingrese el numero de payasos"));
var munecas = parseInt(prompt("Ingrese el numero de munecas"));


function main(payasos, munecas){
    let pesoT = pesoPaquete(payasos, munecas);
    let numPaquetes = (pesoPaquete(payasos, munecas))/1000;
    if((numPaquetes*1000)%1000 != 0){ //este if nos ayudo a redondear con % modulo
        numPaquetes = parseInt(numPaquetes) + 1; //aqui aumenta en 1 el numero de paquetes si se necesita
    }
    console.log(numPaquetes);
    console.log(pesoT/1000);
}


function pesoPaquete(payasos, munecas){
    let pesoTotal = (payasos * 112) + (munecas * 75); //se calculo 
    return pesoTotal;
}

main(payasos, munecas);