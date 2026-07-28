const TABELAS = {

    AREA_A: {

        residencial: {
            minimo: 15,
            faixas: [
                { ate: 15, valor: 7.436291 },
                { ate: 30, valor: 16.359841 },
                { ate: 45, valor: 22.308872 },
                { ate: 60, valor: 44.617747 },
                { ate: Infinity, valor: 59.490329 }
            ]
        },

        comercial: {
            minimo: 20,
            faixas: [
                { ate: 20, valor: 25.283389 },
                { ate: 30, valor: 44.543385 },
                { ate: Infinity, valor: 47.592263 }
            ]
        },

        industrial: {
            minimo: 20,
            faixas: [
                { ate: 20, valor: 38.668714 },
                { ate: 30, valor: 40.602151 },
                { ate: Infinity, valor: 47.517901 }
            ]
        },

        publica: {
            minimo: 15,
            faixas: [
                { ate: 15, valor: 9.815905 },
                { ate: Infinity, valor: 21.713970 }
            ]
        },

        publica_estadual: {
            minimo: 15,
            faixas: [
                { ate: 15, valor: 8.568354 },
                { ate: Infinity, valor: 18.954237 }
            ]
        }
    },


    AREA_B: {

        residencial: {
            minimo: 15,
            faixas: [
                { ate: 15, valor: 6.523050 },
                { ate: 30, valor: 14.350710 },
                { ate: 45, valor: 19.569152 },
                { ate: 60, valor: 39.138304 },
                { ate: Infinity, valor: 52.184405 }
            ]
        },

        comercial: {
            minimo: 20,
            faixas: [
                { ate: 20, valor: 22.178373 },
                { ate: 30, valor: 39.073073 },
                { ate: Infinity, valor: 41.747523 }
            ]
        },

        industrial: {
            minimo: 20,
            faixas:[
                { ate: 20, valor: 30.658338 },
                { ate: 30, valor: 30.658338 },
                { ate: 130, valor: 35.224473 },
                { ate: Infinity, valor: 37.181388 }
            ]
        },

        publica:{
            minimo:15,
            faixas:[
                { ate:15, valor:8.610426 },
                { ate:Infinity, valor:19.047307 }
            ]
        },

        publica_estadual:{
            minimo:15,
            faixas:[
                { ate:15, valor:7.516087 },
                { ate:Infinity, valor:16.626490 }
            ]
        }
    },


    AREA_A_DEZ_2025: {

        residencial:{
            minimo:15,
            faixas:[
                {ate:15,valor:7.520046},
                {ate:30,valor:16.544101},
                {ate:45,valor:22.560137},
                {ate:60,valor:45.120276},
                {ate:Infinity,valor:60.160368}
            ]
        },

        comercial:{
            minimo:20,
            faixas:[
                {ate:20,valor:25.568155},
                {ate:30,valor:45.045077},
                {ate:Infinity,valor:48.128293}
            ]
        },

        industrial:{
            minimo:20,
            faixas:[
                {ate:20,valor:39.104238},
                {ate:30,valor:41.059452},
                {ate:Infinity,valor:48.053094}
            ]
        },

        publica:{
            minimo:15,
            faixas:[
                {ate:15,valor:9.926462},
                {ate:Infinity,valor:21.958534}
            ]
        },

        publica_estadual:{
            minimo:15,
            faixas:[
                {ate:15,valor:8.664859},
                {ate:Infinity,valor:19.167718}
            ]
        }
    },


    AREA_B_DEZ_2025: {

        residencial:{
            minimo:15,
            faixas:[
                {ate:15,valor:6.596519},
                {ate:30,valor:14.512341},
                {ate:45,valor:19.789559},
                {ate:60,valor:39.579118},
                {ate:Infinity,valor:52.772157}
            ]
        },

        comercial:{
            minimo:20,
            faixas:[
                {ate:20,valor:22.428168},
                {ate:30,valor:39.513152},
                {ate:Infinity,valor:42.217724}
            ]
        },

        industrial:{
            minimo:20,
            faixas:[
                {ate:20,valor:31.003643},
                {ate:30,valor:31.003643},
                {ate:130,valor:35.621205},
                {ate:Infinity,valor:37.600162}
            ]
        },

        publica:{
            minimo:15,
            faixas:[
                {ate:15,valor:8.707405},
                {ate:Infinity,valor:19.261836}
            ]
        },

        publica_estadual:{
            minimo:15,
            faixas:[
                {ate:15,valor:7.600740},
                {ate:Infinity,valor:16.813754}
            ]
        }
    }

};



function formatarMoeda(valor){
    return valor.toLocaleString(
        "pt-BR",
        {
            style:"currency",
            currency:"BRL"
        }
    );
}

function calcularPorFaixas(consumo, economias, faixas){

    let total = 0;
    let anterior = 0;


    for(let faixa of faixas){

        let limite = faixa.ate * economias;


        let volume = Math.min(
            consumo - anterior,
            limite - anterior
        );


        if(volume > 0){
            total += volume * faixa.valor;
        }


        anterior = limite;


        if(consumo <= limite){
            break;
        }
    }


    return total;
}



function simular(){

    const area =
        document.getElementById("area").value;


    const categoria =
        document.getElementById("categoria").value;


    const consumo =
        Number(
            document.getElementById("consumo").value
        );


    const economias =
        Number(
            document.getElementById("economias").value
        );


    const possuiEsgoto =
        document.getElementById("esgoto").checked;



    const tabela = 
        TABELAS[area][categoria];



    const consumoMinimo =
        tabela.minimo * economias;



    const volumeFaturado =
        Math.max(
            consumo,
            consumoMinimo
        );



    const agua =
    calcularPorFaixas(
        volumeFaturado,
        economias,
        tabela.faixas
    );



    const esgoto =
        possuiEsgoto
        ? agua
        : 0;



    const subtotal =
        agua + esgoto;



    const recursosHidricos =
        subtotal * 0.0219;



    const total =
        subtotal + recursosHidricos;



    document.getElementById("agua").textContent =
        formatarMoeda(agua);


    document.getElementById("valorEsgoto").textContent =
        formatarMoeda(esgoto);


    document.getElementById("rh").textContent =
        formatarMoeda(recursosHidricos);


    document.getElementById("total").textContent =
        formatarMoeda(total);


    document.getElementById("economiasResultado").textContent =
        economias;


    document.getElementById("consumoMinimo").textContent =
        `${consumoMinimo} m³`;


    document.getElementById("volumeFaturado").textContent =
        `${volumeFaturado} m³`;
}