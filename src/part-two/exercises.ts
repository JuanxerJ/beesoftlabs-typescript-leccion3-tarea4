//------------------------------------------- Ejercicio 1-----------------------------------------------//
const myPromise5 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 500);
});

//   myPromise
//     .then((result) => {
//       return 'This is a ' + result
//     })
//     .then((result) => {
//       console.log(result)
//     })
async function getResult5() {
  const result = (await myPromise5) as string;

  console.log("This is a " + result);
  console.log(result);
}

//------------------------------------------- Ejercicio 2-----------------------------------------------//

const myPromise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve(1);
    } else {
      reject("An error has occurred");
    }
  }, 500);
});

//   myPromise
//     .then((result) => {
//       return result + 1
//     })
//     .then((result) => {
//      console.log(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
async function getResult6() {
  try {
    const result = (await myPromise6) as string;
    console.log(result + 1);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
getResult6();
