const cidades = require("./public/estados-com-cidades.json");
const fs = require("node:fs").promises;

/*
{
  "estados": [
    {
      "id": 12,
      "nomeEstado": "Acre",
      "sigla": "AC",
      "cidades": [
        {
          "id_cidade": 1200013,
          "nomeCidade": "Acrelândia"
        },
*/

console.log(cidades.estados.length);
cidades.estados.forEach(async (element) => {
  try {
    console.log(element.sigla)
    await fs.writeFile(`./cidades/${element.sigla}.json`, JSON.stringify(element.cidades));
  } catch (err) {
    console.error(err);
  }
});

