/* Tarifas informadas pelo usuário: Regiões 1 e 4, a partir de dezembro de 2025. */
let TABELAS = (window.CONCESSAO_ATUAL && window.CONCESSAO_ATUAL.tabelas) ? window.CONCESSAO_ATUAL.tabelas : {
    REGIAO_1: {
        tarifaSocial: 30.12,
        areas: {
            AREA_A: {
                residencial: { minimo: 15, tarifas: {
                    tarifa1: [{ ate: 15, valor: 6.491178 }],
                    tarifa2: [{ ate: 15, valor: 7.436291 }, { ate: 30, valor: 16.359841 }, { ate: 45, valor: 22.308872 }, { ate: 60, valor: 44.617747 }, { ate: Infinity, valor: 59.490329 }]
                }},
                comercial: { minimo: 20, faixas: [{ ate: 20, valor: 25.283389 }, { ate: 30, valor: 44.543385 }, { ate: Infinity, valor: 47.592263 }] },
                industrial: { minimo: 20, faixas: [{ ate: 20, valor: 38.668714 }, { ate: 30, valor: 40.602151 }, { ate: Infinity, valor: 47.517901 }] },
                publica: { minimo: 15, faixas: [{ ate: 15, valor: 9.815905 }, { ate: Infinity, valor: 21.713970 }] },
                publica_estadual: { minimo: 15, faixas: [{ ate: 15, valor: 8.568354 }, { ate: Infinity, valor: 18.954237 }] }
            },
            AREA_B: {
                residencial: { minimo: 15, tarifas: {
                    tarifa1: [{ ate: 15, valor: 5.694003 }],
                    tarifa2: [{ ate: 15, valor: 6.523050 }, { ate: 30, valor: 14.350710 }, { ate: 45, valor: 19.569152 }, { ate: 60, valor: 39.138304 }, { ate: Infinity, valor: 52.184405 }]
                }},
                comercial: { minimo: 20, faixas: [{ ate: 20, valor: 22.178373 }, { ate: 30, valor: 39.073073 }, { ate: Infinity, valor: 41.747523 }] },
                industrial: { minimo: 20, faixas: [{ ate: 20, valor: 30.658338 }, { ate: 30, valor: 30.658338 }, { ate: 130, valor: 35.224473 }, { ate: Infinity, valor: 37.181388 }] },
                publica: { minimo: 15, faixas: [{ ate: 15, valor: 8.610426 }, { ate: Infinity, valor: 19.047307 }] },
                publica_estadual: { minimo: 15, faixas: [{ ate: 15, valor: 7.516087 }, { ate: Infinity, valor: 16.626490 }] }
            }
        }
    },
    REGIAO_4: {
        tarifaSocial: 30.46,
        areas: {
            AREA_A: {
                residencial: { minimo: 15, tarifas: {
                    tarifa1: [{ ate: 15, valor: 6.564287 }],
                    tarifa2: [{ ate: 15, valor: 7.520046 }, { ate: 30, valor: 16.544101 }, { ate: 45, valor: 22.560137 }, { ate: 60, valor: 45.120276 }, { ate: Infinity, valor: 60.160368 }]
                }},
                comercial: { minimo: 20, faixas: [{ ate: 20, valor: 25.568155 }, { ate: 30, valor: 45.045077 }, { ate: Infinity, valor: 48.128293 }] },
                industrial: { minimo: 20, faixas: [{ ate: 20, valor: 39.104238 }, { ate: 30, valor: 41.059452 }, { ate: Infinity, valor: 48.053094 }] },
                publica: { minimo: 15, faixas: [{ ate: 15, valor: 9.926462 }, { ate: Infinity, valor: 21.958534 }] },
                publica_estadual: { minimo: 15, faixas: [{ ate: 15, valor: 8.664859 }, { ate: Infinity, valor: 19.167718 }] }
            },
            AREA_B: {
                residencial: { minimo: 15, tarifas: {
                    tarifa1: [{ ate: 15, valor: 5.758135 }],
                    tarifa2: [{ ate: 15, valor: 6.596519 }, { ate: 30, valor: 14.512341 }, { ate: 45, valor: 19.789559 }, { ate: 60, valor: 39.579118 }, { ate: Infinity, valor: 52.772157 }]
                }},
                comercial: { minimo: 20, faixas: [{ ate: 20, valor: 22.428168 }, { ate: 30, valor: 39.513152 }, { ate: Infinity, valor: 42.217724 }] },
                industrial: { minimo: 20, faixas: [{ ate: 20, valor: 31.003643 }, { ate: 30, valor: 31.003643 }, { ate: 130, valor: 35.621205 }, { ate: Infinity, valor: 37.600162 }] },
                publica: { minimo: 15, faixas: [{ ate: 15, valor: 8.707405 }, { ate: Infinity, valor: 19.261836 }] },
                publica_estadual: { minimo: 15, faixas: [{ ate: 15, valor: 7.600740 }, { ate: Infinity, valor: 16.813754 }] }
            }
        }
    }
};

// Premissas do simulador; confirme estes percentuais na regra aplicável antes de uso real.
const CONFIG = window.SIMULADOR_CONFIG;
const PERCENTUAL_ESGOTO = CONFIG.percentualEsgoto;
// Ajuste este valor quando o percentual oficial de recursos hídricos for confirmado.
const PERCENTUAL_RECURSOS_HIDRICOS_POR_REGIAO = CONFIG.percentualRecursosHidricosPorRegiao;
/*
    // Limite mÃ¡ximo legal usado como premissa da simulaÃ§Ã£o.
    REGIAO_1: 0.02,
    REGIAO_4: 0.02
};
*/

let METADADOS_BASE = (window.CONCESSAO_ATUAL && window.CONCESSAO_ATUAL.metadadosBase) ? window.CONCESSAO_ATUAL.metadadosBase : CONFIG.metadados;
/*
    vigenciaTarifas: "dezembro de 2025",
    fonteConcessao: "Águas do Rio — página oficial de Legislação e Tarifas",
    urlFonteTarifas: "https://aguasdorio.com.br/legislacao-e-tarifas/",
    areaTarifariaInformadaPor: "tabela fornecida pelo usuário",
    percentualEsgotoConfirmado: false,
    percentualRecursosHidricosConfirmado: true,
    statusRecursosHidricos: "limite legal mÃ¡ximo utilizado como premissa da simulaÃ§Ã£o",
    fonteRecursosHidricos: "Lei Estadual n° 4.247/2003, art. 24, §4º"
};

*/
let STATUS_BASE = (window.CONCESSAO_ATUAL && window.CONCESSAO_ATUAL.statusBase) ? window.CONCESSAO_ATUAL.statusBase : "Base de localidades parcial; confirme o município e o bairro antes de usar a simulação.";

let BAIRROS_POR_AREA = (window.CONCESSAO_ATUAL && window.CONCESSAO_ATUAL.bairrosPorArea) ? window.CONCESSAO_ATUAL.bairrosPorArea : {
    AREA_A: [
        "Botafogo", "Lapa", "Coelho Neto", "Praça Seca", "Catete", "Mangueira", "Cordovil", "Ramos",
        "Copacabana", "Paquetá", "Del Castilho", "Riachuelo", "Cosme Velho", "Rio Comprido", "Encantado", "Rocha",
        "Flamengo", "Santa Teresa", "Engenho da Rainha", "Sampaio", "Glória", "Santo Cristo", "Engenho de Dentro", "São Francisco Xavier",
        "Humaitá", "São Cristóvão", "Engenho Novo", "Todos os Santos", "Laranjeiras", "Saúde", "Higienópolis", "Tomás Coelho",
        "Leme", "Vasco da Gama", "Honório Gurgel", "Vigário Geral", "Urca", "Alto da Boa Vista", "Inhaúma", "Vila Valqueire",
        "Gávea", "Andaraí", "Irajá", "Bancários", "Ipanema", "Grajaú", "Jacaré", "Cacuia",
        "Jardim Botânico", "Maracanã", "Jacarezinho", "Cocotá", "Lagoa", "Praça da Bandeira", "Jardim América", "Freguesia (Ilha do Governador)",
        "Leblon", "Tijuca", "Lins de Vasconcelos", "Galeão", "Rocinha", "Vila Isabel", "Manguinhos", "Jardim Carioca",
        "São Conrado", "Abolição", "Maré", "Jardim Guanabara", "Vidigal", "Acari", "Méier", "Moneró",
        "Benfica", "Água Santa", "Olaria", "Pitangueiras", "Caju", "Barros Filho", "Parada de Lucas", "Portuguesa",
        "Catumbi", "Bonsucesso", "Parque Columbia", "Praia da Bandeira", "Centro", "Brás de Pina", "Pavuna", "Ribeira",
        "Cidade Nova", "Cachambi", "Penha", "Tauá", "Estácio", "Campinho", "Piedade"
    ],
    AREA_B: [
        "Anchieta", "Engenheiro Leal", "Parque Anchieta", "Vaz Lobo", "Bento Ribeiro", "Guadalupe", "Penha Circular", "Vicente de Carvalho",
        "Cascadura", "Madureira", "Quintino Bocaiúva", "Vila da Penha", "Cavalcanti", "Marechal Hermes", "Ricardo de Albuquerque", "Vila Kosmos",
        "Colégio", "Maria da Graça", "Rocha Miranda", "Vista Alegre", "Aperibé", "Duas Barras", "Mesquita", "São Gonçalo",
        "Belford Roxo", "Duque de Caxias", "Miracema", "São João de Meriti", "Cachoeiras de Macacu", "Itaboraí", "Nilópolis", "São Sebastião do Alto",
        "Cambuci", "Itaocara", "Nova Iguaçu", "Saquarema", "Cantagalo", "Japeri", "Queimados", "Tanguá",
        "Casimiro de Abreu", "Magé", "Rio Bonito", "Cordeiro", "Maricá", "São Francisco de Itabapoana"
    ]
};

function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

let BAIRROS = Object.entries(BAIRROS_POR_AREA).flatMap(([area, nomes]) =>
    nomes.map(nome => ({ nome, area }))
);

// Regiões da Águas do Rio. Esta classificação é independente de AREA_A/AREA_B.
let MUNICIPIOS_POR_REGIAO = (window.CONCESSAO_ATUAL && window.CONCESSAO_ATUAL.municipiosPorRegiao) ? window.CONCESSAO_ATUAL.municipiosPorRegiao : {
    REGIAO_1: {
        nome: "Águas do Rio - B1",
        municipios: [
            "Aperibé", "Cachoeiras de Macacu", "Cambuci", "Cantagalo",
            "Casimiro de Abreu - Barra de São João", "Cordeiro", "Duas Barras",
            "Itaboraí", "Itaocara", "Magé", "Maricá", "Miracema", "Rio Bonito",
            "São Francisco de Itabapoana", "São Gonçalo", "São Sebastião do Alto",
            "Saquarema - Jaconé", "Tanguá", "Rio de Janeiro - AP2"
        ]
    },
    REGIAO_4: {
        nome: "Águas do Rio - B4",
        municipios: [
            "Belford Roxo", "Duque de Caxias", "Japeri", "Mesquita",
            "Nilópolis", "Nova Iguaçu", "Queimados", "São João de Meriti",
            "Rio de Janeiro - AP1/AP3"
        ]
    }
};

let MUNICIPIOS = Object.entries(MUNICIPIOS_POR_REGIAO).flatMap(
    ([regiao, dados]) => dados.municipios.map(nome => ({
        nome,
        regiao,
        nomeRegiao: dados.nome
    }))
);

let NOMES_MUNICIPIOS = new Set(MUNICIPIOS.map(item => normalizarTexto(item.nome)));

// Bairros cariocas oficiais da concessão (fonte: CEDAE/AGENERSA).
let BAIRROS_OFICIAIS = (window.CONCESSAO_ATUAL && window.CONCESSAO_ATUAL.bairrosOficiais) ? window.CONCESSAO_ATUAL.bairrosOficiais : [
    "Abolição", "Acari", "Água Santa", "Alto da Boa Vista", "Anchieta",
    "Andaraí", "Barros Filho", "Bancários", "Benfica", "Bento Ribeiro",
    "Bonsucesso", "Botafogo", "Brás de Pina", "Cachambi", "Cacuia", "Caju",
    "Campinho", "Cascadura", "Catete", "Catumbi", "Cavalcanti", "Centro",
    "Cidade Nova", "Cidade Universitária", "Cocotá", "Coelho Neto", "Colégio",
    "Complexo do Alemão", "Copacabana", "Cordovil", "Cosme Velho", "Costa Barros",
    "Del Castilho", "Encantado", "Engenheiro Leal", "Engenho da Rainha",
    "Engenho de Dentro", "Engenho Novo", "Estácio", "Freguesia (Ilha do Governador)",
    "Flamengo", "Galeão", "Gamboa", "Gávea", "Glória", "Grajaú", "Guadalupe",
    "Higienópolis", "Honório Gurgel", "Humaitá", "Inhaúma", "Ipanema", "Irajá",
    "Jacaré", "Jacarezinho", "Jardim Botânico", "Jardim Carioca", "Jardim Guanabara",
    "Jardim América", "Lagoa", "Lapa", "Laranjeiras", "Leblon", "Leme",
    "Lins de Vasconcelos", "Madureira", "Mangueira", "Manguinhos", "Maré",
    "Maracanã", "Marechal Hermes", "Maria da Graça", "Méier", "Olaria",
    "Oswaldo Cruz", "Paquetá", "Parada de Lucas", "Parque Anchieta", "Parque Columbia",
    "Pavuna", "Penha", "Penha Circular", "Piedade", "Pilares", "Praça Seca",
    "Praça da Bandeira", "Quintino Bocaiúva", "Ramos", "Riachuelo",
    "Ricardo de Albuquerque", "Rio Comprido", "Rocha", "Rocha Miranda", "Rocinha",
    "Sampaio", "Santa Teresa", "Santo Cristo", "São Conrado", "São Cristóvão",
    "São Francisco Xavier", "Saúde", "Todos os Santos", "Tomás Coelho", "Turiaçu",
    "Urca", "Vasco da Gama", "Vaz Lobo", "Vicente de Carvalho", "Vidigal",
    "Vigário Geral", "Vila da Penha", "Vila Isabel", "Vila Kosmos", "Vila Valqueire",
    "Vista Alegre", "Moneró", "Pitangueiras", "Portuguesa", "Praia da Bandeira",
    "Ribeira", "Tauá", "Tijuca", "Zumbi", "Ilha do Governador"
];

const BAIRROS_B1 = new Set([
    "Botafogo", "Catete", "Copacabana", "Cosme Velho", "Flamengo", "Gávea",
    "Glória", "Humaitá", "Ipanema", "Jardim Botânico", "Lagoa", "Laranjeiras",
    "Leblon", "Leme", "Rocinha", "São Conrado", "Urca", "Vidigal"
].map(normalizarTexto));

let AREA_TARIFARIA_POR_LOCALIDADE = new Map(
    BAIRROS.map(item => [normalizarTexto(item.nome), item.area])
);

let BAIRROS_CONCESSAO = BAIRROS_OFICIAIS.map(nome => ({
    nome,
    bloco: BAIRROS_B1.has(normalizarTexto(nome)) ? "B1" : "B4",
    areaTarifaria: AREA_TARIFARIA_POR_LOCALIDADE.get(normalizarTexto(nome)) || null
}));

let BAIRROS_CONSULTA = BAIRROS_CONCESSAO;
let areaForcadaPeloBairro = null;

function preencherMunicipios() {
    const select = document.getElementById("municipio");
    // limpar opções antes de popular
    select.innerHTML = "<option value=''>Selecione o município ou localidade</option>";

    Object.entries(MUNICIPIOS_POR_REGIAO).forEach(([regiao, dados]) => {
        const grupo = document.createElement("optgroup");
        grupo.label = dados.nome;

        dados.municipios.forEach(nome => {
            const opcao = document.createElement("option");
            opcao.value = regiao;
            opcao.textContent = nome;
            opcao.dataset.nome = nome;
            opcao.dataset.area = nome === "Rio de Janeiro - AP2" ? "AREA_A" : "AREA_B";
            grupo.appendChild(opcao);
        });

        select.appendChild(grupo);
    });
}

function loadConcessao(concessao) {
    const c = concessao || window.CONCESSAO_ATUAL;
    if (!c) return;
    // substituir fontes de dados
    TABELAS = c.tabelas || TABELAS;
    METADADOS_BASE = c.metadadosBase || METADADOS_BASE;
    STATUS_BASE = c.statusBase || STATUS_BASE;
    BAIRROS_POR_AREA = c.bairrosPorArea || {};
    MUNICIPIOS_POR_REGIAO = c.municipiosPorRegiao || {};
    BAIRROS_OFICIAIS = c.bairrosOficiais || [];

    // recalcular estruturas derivadas
    BAIRROS = Object.entries(BAIRROS_POR_AREA).flatMap(([area, nomes]) => nomes.map(nome => ({ nome, area })));
    MUNICIPIOS = Object.entries(MUNICIPIOS_POR_REGIAO).flatMap(([regiao, dados]) => dados.municipios.map(nome => ({ nome, regiao, nomeRegiao: dados.nome })));
    NOMES_MUNICIPIOS = new Set(MUNICIPIOS.map(item => normalizarTexto(item.nome)));
    AREA_TARIFARIA_POR_LOCALIDADE = new Map(BAIRROS.map(item => [normalizarTexto(item.nome), item.area]));
    BAIRROS_CONCESSAO = BAIRROS_OFICIAIS.map(nome => ({
        nome,
        bloco: BAIRROS_B1.has(normalizarTexto(nome)) ? "B1" : "B4",
        areaTarifaria: AREA_TARIFARIA_POR_LOCALIDADE.get(normalizarTexto(nome)) || null
    }));
    BAIRROS_CONSULTA = BAIRROS_CONCESSAO;
    areaForcadaPeloBairro = null;

    popularCategorias();
    atualizarUIConcessao();
}

function popularConcessaoSelector() {
    const sel = document.getElementById('concessaoSelector');
    if (!sel || !window.CONCESSOES) return;
    sel.innerHTML = '';
    Object.entries(window.CONCESSOES).forEach(([id, c]) => {
        const opt = document.createElement('option');
        opt.value = id;
        opt.textContent = c.nome || id;
        sel.appendChild(opt);
    });
    // selecionar atual ou primeira
    const first = Object.keys(window.CONCESSOES)[0];
    sel.value = (window.CONCESSAO_ATUAL && window.CONCESSAO_ATUAL.id) ? window.CONCESSAO_ATUAL.id : first;
    sel.addEventListener('change', e => {
        const id = e.target.value;
        window.CONCESSAO_ATUAL = window.CONCESSOES[id];
        loadConcessao(window.CONCESSAO_ATUAL);
        preencherMunicipios();
        sincronizarLocalidade();
        simular();
    });
}

function atualizarUIConcessao() {
    const ui = window.CONCESSAO_ATUAL?.ui || {};
    const regiaoField = document.getElementById('regiaoField');
    const areaField = document.getElementById('areaField');
    const bairroCard = document.getElementById('bairroCard');
    const tarifaResidencialField = document.getElementById('tarifaResidencialField');
    const buscaBairro = document.getElementById('buscaBairro');
    const resultadoBairro = document.getElementById('resultadoBairro');

    if (regiaoField) {
        regiaoField.hidden = ui.showRegiao === false;
    }
    if (areaField) {
        areaField.hidden = ui.showArea === false;
    }
    if (bairroCard) {
        bairroCard.hidden = ui.showMunicipio === false;
    }
    if (tarifaResidencialField) {
        tarifaResidencialField.hidden = ui.showTarifaResidencial === false;
    }
    if (buscaBairro) {
        buscaBairro.hidden = ui.showBuscaBairro === false;
    }
    if (resultadoBairro) {
        resultadoBairro.hidden = ui.showBuscaBairro === false;
    }

    const areaNota = document.getElementById('areaNota');
    if (areaNota) {
        areaNota.hidden = ui.showArea === false;
    }

    const notaBaseBairros = document.getElementById('notaBaseBairros');
    if (notaBaseBairros) {
        notaBaseBairros.textContent = STATUS_BASE;
    }
}

function popularCategorias() {
    const select = document.getElementById('categoria');
    if (!select) return;
    const categorias = window.CONCESSAO_ATUAL?.categorias;
    if (!categorias) return;

    select.innerHTML = '';
    Object.entries(categorias).forEach(([value, label]) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = label;
        select.appendChild(option);
    });
}

function getTabelaCategoria(categoria, regiao, area) {
    if (TABELAS.default && TABELAS.default[categoria]) {
        return TABELAS.default[categoria];
    }
    if (TABELAS[categoria]) {
        return TABELAS[categoria];
    }
    const regiaoTabela = TABELAS[regiao];
    return regiaoTabela?.areas?.[area]?.[categoria];
}

function pesquisarBairro() {
    const termo = normalizarTexto(document.getElementById("buscaBairro").value);
    const resultado = document.getElementById("resultadoBairro");

    if (termo.length < 2) {
        resultado.textContent = "Digite pelo menos 2 caracteres para pesquisar.";
        resultado.className = "bairro-resultado";
        return;
    }

    const encontrados = BAIRROS_CONSULTA.filter(item => normalizarTexto(item.nome).includes(termo));

    if (!encontrados.length) {
        resultado.textContent = "Bairro não encontrado na base informada.";
        resultado.className = "bairro-resultado erro";
        return;
    }

    resultado.className = "bairro-resultado sucesso";
    resultado.innerHTML = encontrados.slice(0, 10).map(item => `
        <div class="bairro-item">
            <strong>${item.nome}</strong>
            <span>Bloco da concessão: <b>${(window.CONCESSAO_ATUAL && window.CONCESSAO_ATUAL.nome) ? window.CONCESSAO_ATUAL.nome + ' - ' + item.bloco : 'Águas do Rio - ' + item.bloco}</b></span>
            <span>Área tarifária: <b>${item.areaTarifaria ? (item.areaTarifaria === "AREA_A" ? "Área A" : "Área B") : "não informada"}</b></span>
            <button type="button" onclick="selecionarBairro('${item.nome.replace(/'/g, "\\'")}')">
                Usar este bairro
            </button>
        </div>
    `).join("");
}

function selecionarBairro(nome) {
    const bairro = BAIRROS_CONCESSAO.find(item => item.nome === nome);
    if (!bairro) return;

    const regiaoBairro = bairro.bloco === "B1" ? "REGIAO_1" : "REGIAO_4";
    const municipio = document.getElementById("municipio");

    if (municipio.value && municipio.value !== regiaoBairro) {
        alert(`O bairro ${bairro.nome} pertence ao bloco ${bairro.bloco}, mas o município selecionado pertence a outro bloco.`);
        return;
    }

    document.getElementById("regiao").value = regiaoBairro;

    if (bairro.areaTarifaria) {
        areaForcadaPeloBairro = bairro.areaTarifaria;
        document.getElementById("area").value = bairro.areaTarifaria;
        document.getElementById("areaNota").textContent =
            `Área definida pelo bairro: ${bairro.areaTarifaria === "AREA_A" ? "Área A" : "Área B"}.`;
    }

    simular();
}

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function mostrarErro(mensagem = "") {
    const campo = document.getElementById("mensagemErro");
    campo.textContent = mensagem;
    campo.hidden = !mensagem;
}

function calcularPorFaixas(volume, economias, faixas) {
    let total = 0;
    let inicioFaixa = 0;
    for (const faixa of faixas) {
        const limite = faixa.ate * economias;
        const volumeNaFaixa = Math.max(0, Math.min(volume, limite) - inicioFaixa);
        const valor = faixa.valor ?? (faixa.agua + faixa.esgoto);
        total += volumeNaFaixa * valor;
        inicioFaixa = limite;
        if (volume <= limite) break;
    }
    return total;
}

function calcularPorFaixasSeparado(volume, economias, faixas) {
    let totalAgua = 0;
    let totalEsgoto = 0;
    let inicioFaixa = 0;
    for (const faixa of faixas) {
        const limite = faixa.ate * economias;
        const volumeNaFaixa = Math.max(0, Math.min(volume, limite) - inicioFaixa);
        if (volumeNaFaixa > 0) {
            totalAgua += volumeNaFaixa * (faixa.valor ?? faixa.agua ?? 0);
            totalEsgoto += volumeNaFaixa * (faixa.esgoto ?? 0);
        }
        inicioFaixa = limite;
        if (volume <= limite) break;
    }
    return { agua: totalAgua, esgoto: totalEsgoto };
}

function detalharFaixas(volume, economias, faixas) {
    let inicioFaixa = 0;
    return faixas.reduce((linhas, faixa) => {
        const limite = faixa.ate * economias;
        const volumeNaFaixa = Math.max(0, Math.min(volume, limite) - inicioFaixa);
        if (volumeNaFaixa > 0) {
            const valor = faixa.valor ?? (faixa.agua + faixa.esgoto);
            const subtotal = volumeNaFaixa * valor;
            linhas.push(`${volumeNaFaixa.toLocaleString("pt-BR", { maximumFractionDigits: 2 })} m³ × ${formatarMoeda(valor)} = ${formatarMoeda(subtotal)}`);
        }
        inicioFaixa = limite;
        return linhas;
    }, []);
}

function atualizarMemoria({ tarifaSocial, volumeFaturado, economias, tabela, tarifaResidencial, agua, esgoto, recursosHidricos, total }) {
    const memoria = document.getElementById("memoriaCalculo");
    const linhas = [];
    linhas.push(`Volume faturado: ${tarifaSocial ? "tarifa social fixa" : `${volumeFaturado} m³`}`);
    linhas.push(`Economias: ${economias}`);
    if (tarifaSocial) {
        linhas.push(`Tarifa social: ${formatarMoeda(agua / economias)} por economia`);
    } else {
        const faixas = tabela.tarifas?.[tarifaResidencial] || tabela.faixas;
        linhas.push(...detalharFaixas(volumeFaturado, economias, faixas));
    }
    linhas.push(`Água: ${formatarMoeda(agua)}`);
    linhas.push(`Esgoto: ${formatarMoeda(esgoto)}`);
    linhas.push(`Recursos Hídricos: ${formatarMoeda(recursosHidricos)}`);
    linhas.push(`Total estimado: ${formatarMoeda(total)}`);
    memoria.textContent = linhas.join("\n");
}

function atualizarCampoTarifa() {
    const tarifaResidencialField = document.getElementById("tarifaResidencialField");
    const ui = window.CONCESSAO_ATUAL?.ui || {};
    const categoriaResidencial = document.getElementById("categoria").value === "residencial";
    const visivel = ui.showTarifaResidencial !== false && categoriaResidencial;
    if (tarifaResidencialField) {
        tarifaResidencialField.hidden = !visivel;
    }
}

function sincronizarLocalidade() {
    const municipio = document.getElementById("municipio");
    const opcao = municipio.selectedOptions[0];
    const regiao = document.getElementById("regiao");
    const area = document.getElementById("area");
    const nota = document.getElementById("areaNota");

    if (!municipio.value || !opcao) {
        regiao.disabled = false;
        area.disabled = false;
        nota.textContent = "Selecione um município para definir automaticamente a área.";
        return false;
    }

    regiao.value = municipio.value;
    area.value = areaForcadaPeloBairro || opcao.dataset.area;
    regiao.disabled = true;
    area.disabled = true;
    nota.textContent = areaForcadaPeloBairro
        ? `Área definida pelo bairro: ${area.value === "AREA_A" ? "Área A" : "Área B"}.`
        : `Área definida automaticamente: ${area.value === "AREA_A" ? "Área A" : "Área B"}.`;
    return true;
}

function simular({ rolarResultado = false } = {}) {
    sincronizarLocalidade();
    mostrarErro();

    const regiao = document.getElementById("regiao")?.value;
    const area = document.getElementById("area")?.value;
    const categoria = document.getElementById("categoria").value;
    const tarifaResidencial = document.getElementById("tarifaResidencial")?.value;
    const consumo = Number(document.getElementById("consumo").value);
    const economias = Number(document.getElementById("economias").value);
    const possuiEsgoto = document.getElementById("esgoto").checked;

    if (!Number.isFinite(consumo) || consumo < 0 || !Number.isInteger(economias) || economias < 1) {
        alert("Informe um consumo válido e uma quantidade de economias inteira maior ou igual a 1.");
        return;
    }

    const tabela = getTabelaCategoria(categoria, regiao, area);

    if (!tabela) {
        alert("Não foi possível encontrar a tarifa para os dados selecionados.");
        return;
    }

    const consumoMinimo = (tabela.minimo || 0) * economias;
    const volumeFaturado = Math.max(consumo, consumoMinimo);
    const tarifaSocial = categoria === "residencial" && tarifaResidencial === "social" && tabela.tarifas;

    if (tarifaSocial && volumeFaturado > 15 * economias) {
        alert("A tabela informada não apresenta a faixa da Tarifa 1 acima de 15 m³ por economia.");
        return;
    }

    let agua = 0;
    let esgoto = 0;
    let recursosHidricos = 0;
    const percentualRecursosHidricos = window.CONCESSAO_ATUAL?.percentualRecursosHidricos ?? (PERCENTUAL_RECURSOS_HIDRICOS_POR_REGIAO[regiao] || 0);

    if (tabela.faixas) {
        const totais = calcularPorFaixasSeparado(volumeFaturado, economias, tabela.faixas);
        agua = totais.agua;
        esgoto = possuiEsgoto ? totais.esgoto : 0;
    } else if (tarifaSocial) {
        agua = (tabela.tarifas?.[tarifaResidencial] || []).reduce((sum, faixa) => sum + (faixa.agua ?? faixa.valor ?? 0), 0) * economias;
        esgoto = possuiEsgoto ? agua * PERCENTUAL_ESGOTO : 0;
    } else {
        agua = calcularPorFaixas(volumeFaturado, economias, tabela.tarifas?.[tarifaResidencial] || tabela.faixas);
        esgoto = possuiEsgoto ? agua * PERCENTUAL_ESGOTO : 0;
    }

    recursosHidricos = tarifaSocial ? 0 : (agua + esgoto) * percentualRecursosHidricos;
    const total = agua + esgoto + recursosHidricos;

    document.getElementById("agua").textContent = formatarMoeda(agua);
    document.getElementById("valorEsgoto").textContent = formatarMoeda(esgoto);
    document.getElementById("rh").textContent = formatarMoeda(recursosHidricos);
    document.getElementById("total").textContent = formatarMoeda(total);
    document.getElementById("fonteResultado").textContent = `${METADADOS_BASE.fonteConcessao}; ${METADADOS_BASE.vigenciaTarifas}`;
    document.getElementById("percentualRhResultado").textContent = tarifaSocial
        ? "Não aplicado — tarifa social"
        : `${(percentualRecursosHidricos * 100).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}% — limite legal da simulação`;
    document.getElementById("economiasResultado").textContent = economias;
    document.getElementById("consumoMinimo").textContent = tarifaSocial ? "não aplicável" : `${consumoMinimo} m³`;
    document.getElementById("volumeFaturado").textContent = tarifaSocial ? "tarifa fixa" : `${volumeFaturado} m³`;
    atualizarMemoria({ tarifaSocial, volumeFaturado, economias, tabela, tarifaResidencial, agua, esgoto, recursosHidricos, total });

    if (rolarResultado && window.matchMedia("(max-width: 700px)").matches) {
        document.getElementById("resultado").scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function aplicarTema(tema) {
    const noturno = tema === "dark";
    document.documentElement.dataset.theme = noturno ? "dark" : "light";
    const botao = document.getElementById("temaButton");
    botao.setAttribute("aria-pressed", String(noturno));
    botao.setAttribute("aria-label", noturno ? "Ativar modo claro" : "Ativar modo noturno");
    botao.innerHTML = `<span aria-hidden="true">${noturno ? "☀" : "☾"}</span> ${noturno ? "Modo claro" : "Modo noturno"}`;
}

function inicializarTema() {
    const salvo = localStorage.getItem("simula-agua-tema");
    const preferencia = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    aplicarTema(salvo || preferencia);
    document.getElementById("temaButton").addEventListener("click", () => {
        const temaAtual = document.documentElement.dataset.theme;
        const proximo = temaAtual === "dark" ? "light" : "dark";
        localStorage.setItem("simula-agua-tema", proximo);
        aplicarTema(proximo);
    });
}

document.getElementById("categoria").addEventListener("change", () => { atualizarCampoTarifa(); simular(); });
document.getElementById("regiao").addEventListener("change", simular);
document.getElementById("municipio").addEventListener("change", event => {
    areaForcadaPeloBairro = null;
    sincronizarLocalidade();
    simular();
});
document.getElementById("area").addEventListener("change", () => {
    simular();
});
document.getElementById("tarifaResidencial").addEventListener("change", simular);
document.getElementById("consumo").addEventListener("change", simular);
document.getElementById("economias").addEventListener("change", simular);
document.getElementById("esgoto").addEventListener("change", simular);
document.getElementById("simulacaoForm").addEventListener("submit", event => {
    event.preventDefault();
    simular({ rolarResultado: true });
});
document.getElementById("limparButton").addEventListener("click", () => {
    document.getElementById("consumo").value = "15";
    document.getElementById("economias").value = "1";
    document.getElementById("esgoto").checked = true;
    document.getElementById("municipio").value = "";
    document.getElementById("buscaBairro").value = "";
    document.getElementById("resultadoBairro").textContent = "Digite pelo menos 2 caracteres para pesquisar.";
    areaForcadaPeloBairro = null;
    simular();
});
document.getElementById("buscaBairro").addEventListener("input", pesquisarBairro);
document.getElementById("imprimirButton").addEventListener("click", () => window.print());
// popular seletor de concessionárias (se houver) e carregar dados
popularConcessaoSelector();
// aplicar concessionária atual (definida por js/concessoes/*) se existir
loadConcessao(window.CONCESSAO_ATUAL || (window.CONCESSOES ? window.CONCESSOES[Object.keys(window.CONCESSOES)[0]] : null));
preencherMunicipios();
inicializarTema();
atualizarCampoTarifa();
document.getElementById("notaBaseBairros").textContent = STATUS_BASE;
simular();
