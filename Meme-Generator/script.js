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
  const positionDiv = document.createElement('div');
  positionDiv.setAttribute('id', 'relative');
  const card = document.createElement('div');
  card.className = 'card'
  const image = document.createElement('img');
  image.setAttribute('src', url);
  const text1 = document.createElement('p');
  text1.textContent = topText;
  text1.className = 'text';
  text1.id = 'text-1'
  const text2 = document.createElement('p');
  text2.className = 'text'
  text2.id = 'text-2'
  text2.textContent = bottomText;
  positionDiv.appendChild(image);
  positionDiv.appendChild(text1);
  positionDiv.appendChild(text2);
  card.appendChild(positionDiv);
  memeContainer.appendChild(card);
  imageUrlInput.value = '';
  topTextInput.value = '';
  bottomTextInput.value = '';
});
 
// memeContainer.addEventListener