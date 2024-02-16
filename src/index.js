function generateQuote(event) {
  event.preventDefault();
  alert("Generating poem");

  new Typewriter("#quote", {
    strings:
      "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let formElement = document.querySelector("#quotegenerator");
formElement.addEventListener("submit", generateQuote);
