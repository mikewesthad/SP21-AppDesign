function wait(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(`Invalid wait time "${ms}"`);
    } else {
      const startTime = performance.now();
      setTimeout(() => {
        const elapsedTime = performance.now() - startTime;
        resolve(elapsedTime);
      }, ms);
    }
  });
}

// wait(1000)
//   .then((elapsedTime) => console.log(`Timer 1 is done! It took ${elapsedTime}ms.`))
//   .then(() => {
//     return wait(-500);
//   })
//   .then((elapsedTime) => console.log(`Timer 2 is done! It took ${elapsedTime}ms.`))
//   .then(() => wait(1500))
//   .then((elapsedTime) => console.log(`Timer 3 is done! It took ${elapsedTime}ms.`))
//   .catch((err) => console.log(`An error occurred: ${err}.`))
//   .finally(() => console.log("All timing is done."));

async function main() {
  console.log("Timer is starting");

  try {
    const promise = wait(1000);
    const elapsedTime1 = await promise;
    console.log(`Timer 1 is done! It took ${elapsedTime1}ms.`);

    const elapsedTime2 = await wait(-100);
    console.log(`Timer 2 is done! It took ${elapsedTime2}ms.`);

    const elapsedTime3 = await wait(1500);
    console.log(`Timer 3 is done! It took ${elapsedTime3}ms.`);
  } catch (err) {
    console.log(`An error occurred: ${err}.`);
  }

  console.log("All timing is done.");
}

main();
