const form = document.querySelector("form");
const imageUrlInput = document.getElementById("url");
const topTextInput = document.getElementById("top-text");
const bottomTextInput = document.getElementById("bottom-text");
const generateBtn = document.querySelector("button");
const memeContainer = document.getElementById("meme-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// function formData(url, topText, bottomText) {
//   url = imageUrlInput.value;
//   topText = topTextInput.value;
//   bottomText = bottomTextInput.value;
// }
generateBtn.addEventListener("click", function (url, topText, bottomText) {
  url = imageUrlInput.value;
  topText = topTextInput.value;
  bottomText = bottomTextInput.value;
  const card = document.createElement('div');
  card.className = 'meme'
  const image = document.createElement('img');
  image.setAttribute('src', url);
  const text1 = document.createElement('p');
  text1.textContent = topText;
  const text2 = document.createElement('p');
  text2.textContent = bottomText;
  card.appendChild(image, text1, text2);
  memeContainer.appendChild(card);
});
