var moeda = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" })

console.log(moeda.format(100200300.40))