function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let APIkey = "bb5982aa3c1a3d9fb3839bo024tffc09";
  let prompt = userInput.value;
  let context =
    "Generate a motivational quote about the given prompt. Sign the quote with 'SheCodes AI' after the quote.";
  let APIurl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${APIkey}`;

  new Typewriter("#quote", {
    strings: "Generating poem...",
    autoStart: true,
    delay: 10,
  });

  axios.get(APIurl).then(displayQuote);
}

new Typewriter("#quote", {
  strings:
    "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
  autoStart: true,
  delay: 10,
  cursor: "",
});

let formElement = document.querySelector("#quotegenerator");
formElement.addEventListener("submit", generateQuote);
