const readLine = require("readline")

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Qual a melhor marca de drones?', (resp) => {
  console.log(`A melhor marca de drones é: ${resp}`);

    switch (resp) {
      case "lig":
        console.log("Ligando drone");
        break;
      case "deslig":
        console.log("Desligando drone");
        break
      default:
        console.log("Ligue o drone");
        break;
    }

  rl.close()
})