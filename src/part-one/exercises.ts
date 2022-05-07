//------------------------------------------- Ejercicio 1-----------------------------------------------//

const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Success");
  }, 850);
});

async function getResult() {
  const result = await myPromise;

  console.log("Result:", result); // log: 'Result: Success'
}

getResult();

//------------------------------------------- Ejercicio 2-----------------------------------------------//

const myPromise2 = new Promise((success, reject) => {
  setTimeout(() => {
    success(1);
  }, 1000);
});

async function getResult2() {
  const result = (await myPromise2) as number;

  const result2 = result + 2;

  console.log("Result:", result2); // log: 'Result: 3'
}

getResult2();

//------------------------------------------- Ejercicio 3-----------------------------------------------//

const myPromise3 = new Promise((success, reject) => {
  setTimeout(() => {
    success(1);
  }, 1000);
});

async function getResult3() {
  const result = (await myPromise3) as number;

  const result2 = result + 2;

  return result2;
}

getResult3().then((result) => {
  console.log("Result:", result); // log: 'Result: 3'
});

//------------------------------------------- Ejercicio 4-----------------------------------------------//

const myPromise4 = new Promise((success, reject) => {
  setTimeout(() => {
    reject("error!");
  }, 1000);
});

async function getResult4() {
  try {
    const result = (await myPromise4) as number;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getResult4();
