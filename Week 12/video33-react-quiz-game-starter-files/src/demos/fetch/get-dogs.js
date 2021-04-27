async function getDogs(numDogs) {
  try {
    const url = `https://dog.ceo/api/breeds/image/random/${numDogs}`;
    const response = await fetch(url);

    if (!response.ok)
      throw new Error(`Something went wrong, server responded with ${response.status}.`);

    const json = await response.json();
    const { message, status } = json;

    if (status !== "success")
      throw new Error(`Something went wrong! Response had status: ${status}.`);

    return message;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default getDogs;
