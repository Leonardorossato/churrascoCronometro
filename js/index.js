let Adultos = document.getElementById("adultos");
let Criancas = document.getElementById("criancas");
let Duracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = Adultos.value;
    let criancas = Criancas.value;
    let duracao = Duracao.value;

    let TotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let TotalCerveja = cervejaPP(duracao) * adultos;
    let TotalBebidas = bebidasPP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    
    resultado.innerHTML = `<p>${TotalCarne /100}Kg de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(TotalCerveja / 355)}ml de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(TotalBebidas / 2000)}ml de Bebidas</p>`;

}

function carnePP(duracao){
    if(duracao >=6){
        return 650;
    }else{
        return 400;
    }
};

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
};

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
};