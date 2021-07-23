
// Recebe um valor e retorna uma promessa de que o processamento será realizado, e retorna o resultado ou erro
function sum(x) {
  return new Promise((resolve, reject) => {

    if (Number(x) == NaN || Number(x) == undefined || typeof x != Number) {
      reject('Erro');
    }

    setTimeout(() => {
      resolve(x + 5000);
    }, 3000);

  })
}

// usando async - await
async function main() {
  try {
    const result = await sum("#");
    console.log(result );
  } catch(err) {
    console.log(err);
    console.log(process.env.USERNAME);
  }
}

main()