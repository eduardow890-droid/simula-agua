/* Tarifas informadas pelo usuário: Regiões 1 e 4, a partir de dezembro de 2025. */
const TABELAS = {
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
const PERCENTUAL_ESGOTO = 1;
const PERCENTUAL_RECURSOS_HIDRICOS = 0.0219;

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function calcularPorFaixas(volume, economias, faixas) {
    let total = 0;
    let inicioFaixa = 0;
    for (const faixa of faixas) {
        const limite = faixa.ate * economias;
        const volumeNaFaixa = Math.max(0, Math.min(volume, limite) - inicioFaixa);
        total += volumeNaFaixa * faixa.valor;
        inicioFaixa = limite;
        if (volume <= limite) break;
    }
    return total;
}

function atualizarCampoTarifa() {
    const visivel = document.getElementById("categoria").value === "residencial";
    document.getElementById("tarifaResidencialField").hidden = !visivel;
}

function simular({ rolarResultado = false } = {}) {
    const regiao = document.getElementById("regiao").value;
    const area = document.getElementById("area").value;
    const categoria = document.getElementById("categoria").value;
    const tarifaResidencial = document.getElementById("tarifaResidencial").value;
    const consumo = Number(document.getElementById("consumo").value);
    const economias = Number(document.getElementById("economias").value);
    const possuiEsgoto = document.getElementById("esgoto").checked;

    if (!Number.isFinite(consumo) || consumo < 0 || !Number.isInteger(economias) || economias < 1) {
        alert("Informe um consumo válido e uma quantidade de economias inteira maior ou igual a 1.");
        return;
    }

    const regiaoTabela = TABELAS[regiao];
    const tabela = regiaoTabela.areas[area][categoria];
    const consumoMinimo = tabela.minimo * economias;
    const volumeFaturado = Math.max(consumo, consumoMinimo);
    const tarifaSocial = categoria === "residencial" && tarifaResidencial === "social";

    if (categoria === "residencial" && tarifaResidencial === "tarifa1" && volumeFaturado > 15 * economias) {
        alert("A tabela informada não apresenta a faixa da Tarifa 1 acima de 15 m³ por economia.");
        return;
    }

    const agua = tarifaSocial
        ? regiaoTabela.tarifaSocial * economias
        : calcularPorFaixas(volumeFaturado, economias, categoria === "residencial" ? tabela.tarifas[tarifaResidencial] : tabela.faixas);
    const esgoto = possuiEsgoto ? agua * PERCENTUAL_ESGOTO : 0;
    const recursosHidricos = (agua + esgoto) * PERCENTUAL_RECURSOS_HIDRICOS;
    const total = agua + esgoto + recursosHidricos;

    document.getElementById("agua").textContent = formatarMoeda(agua);
    document.getElementById("valorEsgoto").textContent = formatarMoeda(esgoto);
    document.getElementById("rh").textContent = formatarMoeda(recursosHidricos);
    document.getElementById("total").textContent = formatarMoeda(total);
    document.getElementById("economiasResultado").textContent = economias;
    document.getElementById("consumoMinimo").textContent = tarifaSocial ? "não aplicável" : `${consumoMinimo} m³`;
    document.getElementById("volumeFaturado").textContent = tarifaSocial ? "tarifa fixa" : `${volumeFaturado} m³`;

    if (rolarResultado && window.matchMedia("(max-width: 700px)").matches) {
        document.getElementById("resultado").scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

document.getElementById("categoria").addEventListener("change", () => { atualizarCampoTarifa(); simular(); });
document.getElementById("regiao").addEventListener("change", simular);
document.getElementById("area").addEventListener("change", simular);
document.getElementById("tarifaResidencial").addEventListener("change", simular);
document.getElementById("consumo").addEventListener("change", simular);
document.getElementById("economias").addEventListener("change", simular);
document.getElementById("esgoto").addEventListener("change", simular);
document.getElementById("calcularButton").addEventListener("click", () => simular({ rolarResultado: true }));
atualizarCampoTarifa();
simular();
