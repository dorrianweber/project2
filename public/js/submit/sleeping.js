const sleepingFormHandler = async (event) => {
  event.preventDefault();

  let date = document.querySelector("#date").value;
  const hours = document.querySelector("#sleep-hours").value;

  if (date && hours) {
    date = moment(date).format("M/D/YY");

    const response = await fetch("/api/sleeping", {
      method: "POST",
      body: JSON.stringify({ date, hours }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".sleeping-form").addEventL;

const url = "https://api.quotable.io/random?tags=inspirational,famous-quotes";

function generateQuote() {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      document.getElementById("quote").innerHTML = data.content;
      document.getElementById("author").innerHTML = "- " + data.author;
    })
    .catch(function (err) {
      console.log(err);
    });
}
// Repeat generateQuote() every 10 seconds
setInterval(generateQuote(), 30000);
//Note - 10000 milliseconds = 10
