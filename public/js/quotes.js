const env = dotenv.config();

const quotes = async () => {
  fetch("https://healthruwords.p.rapidapi.com/v1/quotes/?maxR=1", {
    method: "GET",
    headers: {
      "x-rapidapi-key": env.quotes_API,
      "x-rapidapi-host": "healthruwords.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      const quote = (document.getElementById("url").innerHTML =
        response.content);
      const author = (document.getElementById("author").innerHTML =
        "- " + response.originator.name + " -");
    })
    .catch((err) => {
      console.error(err);
    });
  quote;
  author;
};

quotes();
