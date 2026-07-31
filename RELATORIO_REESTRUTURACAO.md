# Relatório de reorganização do projeto

## Objetivo

Preparar o Simula Água para crescer sem misturar dados tarifários, premissas, regras de cálculo e código de interface.

## Etapa 1 — Configurações e premissas

Foi criado o arquivo `js/configuracao.js`, carregado antes do `app.js`.

Ele concentra:

- percentual de esgoto;
- limite utilizado para Recursos Hídricos;
- vigência tarifária informada;
- fonte oficial das tarifas;
- status de confirmação das premissas;
- links de referência.

O `app.js` passou a consumir essas informações por meio de `window.SIMULADOR_CONFIG`.

## Etapa 2 — Estrutura futura de dados

Foi criada a pasta `dados/` com o arquivo `dados/README.md`, contendo os modelos recomendados para:

- `tarifas-AAAA.json`;
- `localidades.json`.

Os modelos exigem fonte, vigência e data de atualização para cada conjunto de dados.

## Etapa 3 — Documentação

O `README.md` foi atualizado para refletir:

- funcionalidades reais;
- fontes oficiais;
- premissas do cálculo;
- limitações conhecidas;
- estrutura atual do projeto;
- objetivo educacional.

Também foi mantido o `METODOLOGIA.md` para explicar a lógica e as fontes.

## Pontos que exigem atenção

### Dados tarifários

As tabelas ainda estão dentro do `app.js`. A próxima migração deve copiar os valores para arquivos JSON versionados e fazer o carregamento desses arquivos antes da simulação.

### Localidades

A base de bairros ainda é parcial e não possui relação completa entre município, bairro, bloco e área. Não adicionar localidades sem fonte oficial e data de conferência.

### Cálculo progressivo

A aplicação progressiva das faixas é uma premissa do simulador. Deve ser validada com memória de cálculo, contrato ou documento regulatório antes de ser apresentada como regra oficial.

### Recursos Hídricos

O percentual de 2% é utilizado como limite legal máximo da simulação. Não deve ser descrito como percentual homologado para todos os blocos ou exercícios.

### Esgoto

O percentual configurado ainda precisa de confirmação documental específica. O status permanece indicado na configuração.

### Testes

O ambiente disponível não possui Node.js. Ainda é necessário criar e executar testes para limites de faixa, tarifa social, economias, esgoto e Recursos Hídricos.

## Próximas etapas recomendadas

1. Migrar `TABELAS` para `dados/tarifas-2025.json`.
2. Migrar bairros e municípios para `dados/localidades.json`.
3. Criar `js/calculadora.js` sem dependência do DOM.
4. Criar `js/interface.js` para manipulação da tela.
5. Criar `js/formatadores.js` e `js/tema.js`.
6. Adicionar testes automatizados.
7. Validar exemplos contra faturas anonimizadas.
