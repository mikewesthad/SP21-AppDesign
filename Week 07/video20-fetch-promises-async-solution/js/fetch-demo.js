async function main() {
  console.log("Fetch initiated!");

  const url = "https://opentdb.com/api.php?amount=5&type=multiple";
  // const url = "https://httpstat.us/404";
  try {
    const response = await fetch(url);
    console.log(response);
    console.log(`Response ok? ${response.ok}`);
    console.log(`Response status? ${response.status}`);

    // Stop the processing of the response and kick us over to the catch block.
    if (!response.ok) {
      throw new Error(`Something went wrong, server responded with ${response.status}.`);
    }

    const json = await response.json();
    const { response_code, results } = json;

    if (response_code === 1) {
      throw new Error("Bad API request - no results!");
    } else if (response_code === 2) {
      throw new Error("Bad API request - invalid parameter!");
    }

    results.forEach((triviaItem, index) => {
      const { question, difficulty, correct_answer } = triviaItem;
      console.log(`
        Question number: ${index + 1}
        Difficulty: ${difficulty}
        ${question}
        ${correct_answer}
      `);
    });

    const triviaDiv = document.querySelector("#trivia");
    results.forEach((triviaItem) => {
      triviaDiv.insertAdjacentHTML("beforeend", `<p>${triviaItem.question}</p>`);
    });
  } catch (err) {
    console.log("An error occurred.");
    console.error(err);
  }
}

main();
