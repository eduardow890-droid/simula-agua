/* Configurações e premissas do simulador. Dados tarifários continuam em app.js nesta etapa. */
window.SIMULADOR_CONFIG = {
    percentualEsgoto: 1,
    percentualRecursosHidricosPorRegiao: {
        REGIAO_1: 0.02,
        REGIAO_4: 0.02
    },
    metadados: {
        vigenciaTarifas: "dezembro de 2025",
        fonteConcessao: "Águas do Rio — página oficial de Legislação e Tarifas",
        urlFonteTarifas: "https://aguasdorio.com.br/legislacao-e-tarifas/",
        areaTarifariaInformadaPor: "tabela oficial publicada pela Águas do Rio",
        percentualEsgotoConfirmado: false,
        percentualRecursosHidricosConfirmado: false,
        statusRecursosHidricos: "limite legal máximo utilizado como premissa da simulação",
        fonteRecursosHidricos: "Lei Estadual nº 4.247/2003, art. 24, §4º"
    }
};
