// Dados da concessionária Águas do Rio (modo plugável para futuras concessionárias)
// Não alterar valores nesta cópia — usado para permitir troca de concessão.
(function(){
    const CONCESSAO = {
        id: "aguas_do_rio",
        nome: "Águas do Rio",
        metadadosBase: {
            vigenciaTarifas: "dezembro de 2025",
            fonteConcessao: "Águas do Rio — página oficial de Legislação e Tarifas",
            urlFonteTarifas: "https://aguasdorio.com.br/legislacao-e-tarifas/",
            areaTarifariaInformadaPor: "tabela fornecida pelo usuário",
            percentualEsgotoConfirmado: false,
            percentualRecursosHidricosConfirmado: true,
            statusRecursosHidricos: "limite legal máximo utilizado como premissa da simulação",
            fonteRecursosHidricos: "Lei Estadual n° 4.247/2003, art. 24, §4º"
        },
        statusBase: "Base de localidades parcial; confirme o município e o bairro antes de usar a simulação.",
        // Tabelas tarifárias (valores conforme implementado originalmente em app.js)
        tabelas: {
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
        },
        bairrosPorArea: {
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
        },
        bairrosOficiais: [
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
        ],
        municipiosPorRegiao: {
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
        }
    };

    // Expor a concessionária atual para que o app possa alternar entre diferentes concessionárias
    window.CONCESSAO_ATUAL = CONCESSAO;
    // Também disponibilizar em um dicionário para futuras concessionárias
    window.CONCESSOES = window.CONCESSOES || {};
    window.CONCESSOES[CONCESSAO.id] = CONCESSAO;
})();
