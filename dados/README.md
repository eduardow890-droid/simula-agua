# Estrutura dos dados

Esta pasta deve receber os dados versionáveis do simulador, separados da lógica JavaScript.

## `tarifas-AAAA.json`

Cada arquivo deve representar uma tabela tarifária publicada para um período específico:

```json
{
  "vigencia": "dezembro de 2025",
  "fonte": "https://aguasdorio.com.br/legislacao-e-tarifas/",
  "regioes": {
    "REGIAO_1": {
      "AREA_A": {
        "residencial": {
          "minimo": 15,
          "tarifas": {
            "tarifa2": [
              { "ate": 15, "valor": 7.436291 }
            ]
          }
        }
      }
    }
  }
}
```

## `localidades.json`

As localidades devem relacionar município, região, área e bairros:

```json
{
  "municipios": [
    {
      "nome": "São Gonçalo",
      "regiao": "REGIAO_1",
      "area": "AREA_B",
      "bairros": ["Centro", "Alcântara"],
      "fonte": "fonte oficial",
      "atualizadoEm": "AAAA-MM-DD"
    }
  ]
}
```

Não incluir uma localidade sem fonte, data de conferência e indicação clara de cobertura.
