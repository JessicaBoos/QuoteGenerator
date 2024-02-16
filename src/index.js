function generatePoem(event) {
  event.preventDefault();
  alert("Generating poem");
}

let formElement = document.querySelector("#quotegenerator");
formElement.addEventListener("submit", generatePoem);
