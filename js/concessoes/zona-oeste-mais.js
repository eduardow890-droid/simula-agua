(function(){
    const CONCESSAO = {
        id: 'zona_oeste_mais',
        nome: 'Zona Oeste +',
        metadadosBase: {
            vigenciaTarifas: 'não definido',
            fonteConcessao: 'Zona Oeste + - tabela específica',
            urlFonteTarifas: '',
            areaTarifariaInformadaPor: 'tabela interna de concessionária',
            percentualEsgotoConfirmado: true,
            percentualRecursosHidricosConfirmado: false,
            statusRecursosHidricos: 'não aplicável para esta concessionária',
            fonteRecursosHidricos: ''
        },
        statusBase: 'Esta concessionária usa uma tabela própria sem classificação por região ou área tarifária.',
        ui: {
            showMunicipio: false,
            showRegiao: false,
            showArea: false,
            showTarifaResidencial: false,
            showBuscaBairro: false
        },
        categorias: {
            residencial: 'Residencial',
            residencialComum: 'Residencial Comum',
            comercial: 'Comercial',
            industrial: 'Industrial',
            publica: 'Pública',
            social: 'Social'
        },
        bairrosPorArea: {},
        bairrosOficiais: [],
        municipiosPorRegiao: {}
    };
    
    const tabelas_zona_oeste_mais = {

  residencial: {
    minimo: 15,
    faixas: [
      { ate: 15, agua: 6.4570, esgoto: 4.5237 },
      { ate: 30, agua: 14.2053, esgoto: 9.9510 },
      { ate: 45, agua: 19.3709, esgoto: 13.5713 },
      { ate: 60, agua: 38.7418, esgoto: 27.1433 },
      { ate: Infinity, agua: 51.6558, esgoto: 36.1912 }
    ]
  },

  residencialComum: {
    minimo: 15,
    faixas: [
      { ate: 15, agua: 5.6363, esgoto: 3.9486 }
    ]
  },

  comercial: {
    faixas: [
      { ate: 20, agua: 21.9537, esgoto: 15.3806 },
      { ate: 30, agua: 38.6773, esgoto: 27.0979 },
      { ate: Infinity, agua: 41.3246, esgoto: 28.9523 }
    ]
  },

  industrial: {
    faixas: [
      { ate: 20, agua: 30.3478, esgoto: 21.2608 },
      { ate: 30, agua: 30.3478, esgoto: 21.2608 },
      { ate: 130, agua: 34.8677, esgoto: 24.4285 },
      { ate: Infinity, agua: 36.8047, esgoto: 25.7846 }
    ]
  },

  publica: {
    minimo: 15,
    faixas: [
      { ate: 15, agua: 8.5232, esgoto: 5.9707 },
      { ate: Infinity, agua: 18.8544, esgoto: 13.2092 }
    ]
  },

  social: {
    minimo: 15,
    faixas: [
      { ate: 15, agua: 4.9685, esgoto: 3.5641 }
    ]
  }

};

    CONCESSAO.tabelas = {
        default: tabelas_zona_oeste_mais
    };
    CONCESSAO.categorias = CONCESSAO.categorias || {};

    // Expor a concessionária atual para que o app possa alternar entre diferentes concessionárias
    window.CONCESSAO_ATUAL = CONCESSAO;
    // Também disponibilizar em um dicionário para futuras concessionárias
    window.CONCESSOES = window.CONCESSOES || {};
    window.CONCESSOES[CONCESSAO.id] = CONCESSAO;
})();
