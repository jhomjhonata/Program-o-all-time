function calcular(){
    var peso_in = window.document.getElementById('peso');
    var altu_in = window.document.getElementById('altura');
    let imc_res = '';
    var saidas = [];
    var homem = window.document.getElementById('masc');
    var mulher = window.document.getElementById('fem');
    let peso_ideal;

    //Tentando resetar os valores do vetor
    /*for(let c in saidas){
        saidas[c] = '';
    }
    for(let c = 0; c < saidas.length; c++){
        saidas[c] = ' ';
    }*/

    let imc = Number(peso_in.value)/(Number(altu_in.value)**2);
    if(imc < 18.5){
        imc_res = 'Abaixo do peso.';
    }else if(imc > 18.6 && imc < 24.9){
        imc_res = 'Peso ideal';
    }else if(imc > 25 && imc < 29.9){
        imc_res = 'Levemente acima do peso';
    }else if(imc > 30 && imc < 34.9){
        imc_res = 'Obsidade grau I';
    }else if(imc > 35 && imc < 39.9){
        imc_res = 'Obsidade grau II';
    }else if(imc > 40){
        imc_res = 'Obsidade Mórbida';
    }

    if(imc_res != 'Peso ideal' && homem.checked){
        peso_ideal = ((Number(altu_in.value) * 100) - 100) * 0.90;
    }else if(imc_res != 'Peso ideal' && mulher.checked){
        peso_ideal = ((Number(altu_in.value) * 100) - 100) * 0.85;
    }else if(imc_res == 'Peso ideal'){
        peso_ideal = ';)';
    }

    saidas[0] = window.document.getElementById('p1');
    saidas[1] = window.document.getElementById('p2');
    saidas[2] = window.document.getElementById('p3');
    saidas[3] = window.document.getElementById('p4');
    saidas[4] = window.document.getElementById('p5');

    saidas[0].innerText += ` ${altu_in.value}`;
    saidas[1].innerText += ` ${peso_in.value}`;
    saidas[2].innerText += ` ${imc}`;
    saidas[3].innerText += ` ${imc_res}`;
    saidas[4].innerText += ` ${peso_ideal}`;
}