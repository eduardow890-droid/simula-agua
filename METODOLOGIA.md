# Metodologia do Simula Água

## Objetivo

Este é um projeto educacional para estudar JavaScript, manipulação do DOM, validação de dados e cálculo por faixas tarifárias.

## Fontes

- Tarifas, faixas, tarifa social e localidades: [Águas do Rio — Legislação e Tarifas](https://aguasdorio.com.br/legislacao-e-tarifas/).
- Repasse de Recursos Hídricos: Lei Estadual nº 4.247/2003 e Decreto Estadual nº 41.974/2009.

## Premissas

- O cálculo aplica os valores publicados por faixa de consumo.
- A aplicação progressiva das faixas é uma premissa didática do simulador.
- Recursos Hídricos utiliza 2% como limite legal máximo da simulação, não como percentual homologado para todos os blocos.
- O percentual de esgoto é uma premissa configurada no projeto e precisa de confirmação específica.
- A base de bairros e municípios ainda é parcial.
- O resultado não substitui a fatura, a memória de cálculo da concessionária ou manifestação da AGENERSA.

## Exemplo

Para 20 m³ na Região 1, Área A, Residencial Tarifa 2:

```text
15 m³ × R$ 7,436291
5 m³ × R$ 16,359841
```

O sistema mantém as casas decimais da tabela durante o cálculo e formata o resultado final em reais.

## Limitações conhecidas

- Não há controle automático de vigências tarifárias.
- Não há integração com faturas reais.
- Não há validação automática de bairro por município para toda a concessão.
- As tarifas devem ser revisadas quando a fonte oficial for atualizada.
