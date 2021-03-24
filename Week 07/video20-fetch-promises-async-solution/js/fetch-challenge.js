async function main() {
  // See https://openlibrary.org/dev/docs/api/books.
  const url = "https://openlibrary.org/works/OL45883W.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Something went wrong, server responded with ${response.status}.`);
    }

    const json = await response.json();
    const { title, description, covers, subjects } = json;

    let imageUrl = "";
    if (covers.length >= 0) {
      // See https://openlibrary.org/dev/docs/api/covers.
      const firstCover = covers[0];
      const size = "M";
      imageUrl = `http://covers.openlibrary.org/b/id/${firstCover}-${size}.jpg`;
    }

    const bookDiv = document.querySelector("#book");
    bookDiv.insertAdjacentHTML(
      "beforeend",
      `
      <h2>${title}</h2>
      <p>${description}</p>
      <p>${subjects.join(", ")}</p>
      <img src="${imageUrl}"/>
    `
    );
    console.log(json);
  } catch (err) {
    console.log("An error occurred.");
    console.error(err);
  }
}

main();
