# Relatório de alterações

## Objetivo

Melhorar a estrutura do Simula Água, deixar a cobertura da base de localidades explícita e preparar o projeto para uma futura carga completa de bairros por município.

## Alterações realizadas

- Adicionada descrição para mecanismos de busca no HTML.
- Adicionada orientação sobre a cobertura parcial da base de bairros.
- Adicionada orientação sobre o consumo total informado pelo hidrômetro.
- Resultado marcado como região dinâmica com `aria-live`.
- Incluída fonte e vigência tarifária no resultado.
- Incluída mensagem de erro acessível na área de resultado.
- Adicionada ação para imprimir o resultado.
- Criado estilo de impressão para gerar uma versão limpa da simulação.
- Criada função reutilizável para exibir mensagens de erro na interface.
- Mantida a ressalva de que as tarifas e percentuais precisam ser confirmados oficialmente.

## Cobertura da base de localidades

A base atual ainda não contém uma relação completa e validada de bairro para cada município. Os relatórios públicos consultados informam quantitativos de bairros e municípios, mas não fornecem no projeto uma tabela completa pronta para importação.

Por isso, nenhuma localidade nova foi inventada. A interface agora informa essa limitação ao usuário, evitando apresentar a base parcial como se fosse completa.

## Organização visual e modo noturno

- Criada uma área de variáveis no início do `style.css` para alterar cores, superfícies, bordas, sombras, raios e tipografia.
- Os componentes principais passaram a reutilizar essas variáveis.
- Corrigido o card de projeto independente com cor de texto, fundo, opacidade e visibilidade explícitos.
- O card permanece legível nos temas claro e escuro.

## Taxa de Recursos Hídricos

- Aplicado o limite legal máximo de 2% como premissa da simulação para os dois blocos.
- O sistema não apresenta esse limite como percentual homologado ou vigente para cada bloco.
- Removida a afirmação de vigência específica em 25/04/2024.
- O percentual aplicado passou a aparecer no resultado como “limite legal da simulação”.
- Para tarifa social, o repasse de Recursos Hídricos é zerado, conforme art. 24, §3º, da Lei nº 4.247/2003.
- Criado card de referências com a Lei nº 4.247/2003, o Decreto nº 41.974/2009 e a IN AGENERSA nº 125/2024.
- Não foi implementado controle de vigências tarifárias nesta etapa.

## Fonte oficial e avisos legais

- A fonte principal das tarifas passou a ser identificada como a página oficial de Legislação e Tarifas da Águas do Rio.
- O resultado passou a oferecer link direto para a fonte tarifária.
- O texto da interface esclarece que o cálculo por faixas é uma premissa do simulador.
- Adicionado aviso de que a simulação não substitui fatura, memória de cálculo da concessionária ou manifestação da AGENERSA.

## Próxima etapa recomendada

Criar um arquivo separado, por exemplo `localidades.json`, com os campos:

```json
{
  "municipio": "São Gonçalo",
  "regiao": "REGIAO_1",
  "area": "AREA_B",
  "bairros": ["Centro", "Alcântara"],
  "fonte": "fonte oficial",
  "atualizadoEm": "AAAA-MM-DD"
}
```

Depois, a busca deve filtrar os bairros pelo município selecionado e impedir combinações incompatíveis entre município, região e área tarifária.

## Observação

Os cálculos continuam sendo estimativas. O percentual de esgoto, os recursos hídricos e a vigência das tarifas devem ser revisados contra a norma ou tabela oficial antes de uso operacional.
