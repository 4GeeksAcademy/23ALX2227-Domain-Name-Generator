const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon", "puedes"];
const ext = [".com", ".net", ".es", ".eu"];

let dominio = [];

for (let pronombres = 0; pronombres < pronoun.length; pronombres++) {

  for (let adjetivos = 0; adjetivos < adj.length; adjetivos++) {

    for (let sustantivos = 0; sustantivos < noun.length; sustantivos++) {

      for (let extenciones = 0; extenciones < ext.length; extenciones++) {

        dominio.push(pronoun[pronombres] + adj[adjetivos] + noun[sustantivos] + ext[extenciones]);

      }

    }

  }

}

console.log(dominio);