# Simula Água

Simulador educacional de estimativa de tarifas de água, esgoto e Recursos Hídricos da Águas do Rio.

O projeto foi desenvolvido com HTML, CSS e JavaScript puro, sem dependências externas e sem backend.

> **Importante:** esta é uma ferramenta independente para estudo. O resultado é uma estimativa e não substitui a fatura, a memória de cálculo da concessionária ou uma manifestação da AGENERSA.

## Funcionalidades

- Cálculo por faixas de consumo.
- Regiões 1 e 4.
- Áreas tarifárias A e B.
- Categorias residencial, comercial, industrial, pública e pública estadual.
- Tarifa residencial 1, Tarifa 2 e tarifa social.
- Cálculo de água, esgoto e Recursos Hídricos.
- Suporte a múltiplas economias.
- Seleção de município e consulta de bairro.
- Memória detalhada do cálculo.
- Modo noturno com preferência salva no navegador.
- Botão para limpar os dados.
- Impressão do resultado.
- Interface responsiva.
- Avisos de fonte, premissas e limitações.

## Fonte tarifária

Os valores tarifários utilizados foram reproduzidos da página oficial:

[Águas do Rio — Legislação e Tarifas](https://aguasdorio.com.br/legislacao-e-tarifas/)

A tabela atualmente cadastrada no projeto corresponde às tarifas apresentadas como válidas a partir de dezembro de 2025.

## Base normativa consultada

- [Lei Estadual nº 4.247/2003 — ALERJ](https://www3.alerj.rj.gov.br/lotus_notes/default.asp?URL=L0NPTlRMRUkuTlNGL2M4YWEwOTAwMDI1ZmVlZjYwMzI1NmRmZjAwNmM4OGY0P09wZW5Eb2N1bWVudA%3D%3D&id=2)
- [Decreto Estadual nº 41.974/2009 — INEA](https://www.inea.rj.gov.br/wp-content/uploads/2019/01/base_legal-2.pdf)
- [Instrução Normativa AGENERSA nº 125/2024](https://www.rj.gov.br/agenersa/sites/default/files/arquivos_paginas_basicas/IN125.pdf)

## Premissas do simulador

- O cálculo aplica os valores publicados em cada faixa tarifária.
- A aplicação progressiva das faixas é uma premissa didática do simulador.
- O limite de 2% para Recursos Hídricos é utilizado como limite legal máximo da simulação, não como percentual homologado para todos os blocos ou exercícios.
- O percentual de esgoto é uma premissa configurada no projeto e deve ser confirmado na documentação aplicável.
- Consumidores na tarifa social não recebem o repasse de Recursos Hídricos no cálculo do simulador.
- O resultado é arredondado para apresentação em reais.

## Limitações conhecidas

- A base de bairros e municípios ainda é parcial.
- A busca de bairros ainda não representa toda a relação oficial município–bairro da concessão.
- Não há controle automático de vigências tarifárias.
- Não há integração com faturas reais.
- Não há validação automática do resultado contra a memória de cálculo da concessionária.
- O projeto não deve ser utilizado para cobrança, contestação ou decisão financeira sem conferência documental.

## Como utilizar

1. Baixe ou clone o projeto.
2. Abra o arquivo `index.html` em um navegador moderno.
3. Selecione a região, área, categoria e tarifa.
4. Informe o consumo e a quantidade de economias.
5. Escolha se o imóvel possui esgoto.
6. Clique em **Calcular simulação**.
7. Abra **Ver memória do cálculo** para consultar os subtotais.

Não é necessário instalar dependências.

## Estrutura do projeto

```text
simula-agua/
├── index.html
├── style.css
├── app.js
├── js/
│   └── configuracao.js
├── dados/
│   └── README.md
├── METODOLOGIA.md
├── RELATORIO_ALTERACOES.md
├── RELATORIO_REESTRUTURACAO.md
├── simulador.png
└── README.md
```

`configuracao.js` concentra as premissas alteráveis do simulador. A pasta
`dados/` documenta o formato planejado para separar tarifas e localidades do
código de cálculo. Nesta etapa, as tabelas legadas ainda permanecem em
`app.js` para preservar o funcionamento atual.

## Organização visual

As principais variáveis visuais estão no início de `style.css`, incluindo:

- cores;
- fundos;
- bordas;
- sombras;
- raios dos cartões;
- tipografia;
- foco dos campos.

## Objetivo educacional

O projeto serve para praticar:

- lógica de programação;
- JavaScript e manipulação do DOM;
- formulários e validação;
- cálculos por faixas;
- acessibilidade;
- responsividade;
- organização e documentação de fontes de dados.

## Licença

Este projeto está disponível sob a licença MIT.

## Autor

**Wagner Eduardo**

GitHub: [eduardow890-droid](https://github.com/eduardow890-droid)
