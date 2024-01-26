document.getElementById('meme-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const imageUrl = document.getElementById('image').value;
  const topText = document.getElementById('top-text').value;
  const bottomText = document.getElementById('bottom-text').value;

  //create meme div
  const memeDiv = document.createElement('div');
  memeDiv.classList.add('meme');

  //create image
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Meme Image'

  //create top text
  const topTextDiv = document.createElement('div');
  topTextDiv.classList.add('meme-text', 'top-text');
  topTextDiv.textContent = topText;

  //create bottom text
  const bottomTextDiv = document.createElement('div');
  bottomTextDiv.classList.add('meme-text', 'bottom-text');
  bottomTextDiv.textContent = bottomText;

  //create remove button
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', function () {
    memeDiv.remove();
  });

  //add elements to meme div
  memeDiv.appendChild(img);
  memeDiv.appendChild(topTextDiv);
  memeDiv.appendChild(bottomTextDiv);
  memeDiv.appendChild(removeBtn);

  //add meme div to container
  document.getElementById('meme-container').appendChild(memeDiv);

  //reset form
  document.getElementById('image').value = '';
  document.getElementById('top-text').value = '';
  document.getElementById('bottom-text').value = '';
});