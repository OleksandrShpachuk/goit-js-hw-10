import { fetchBreeds, fetchCatByBreed } from './api.js';

const breedSelect = document.querySelector('select.breed-select');
const loaderMessage = document.querySelector('p.loader');
const errorMessage = document.querySelector('p.error');
const catInfoDiv = document.querySelector('.cat-info');

breedSelect.style.display = 'none';
loaderMessage.textContent = 'Loading data, please wait...';

function populateBreedSelect(breeds) {
  breeds.forEach(breed => {
    const option = new Option(breed.name, breed.id);
    breedSelect.appendChild(option);
  });

  breedSelect.style.display = 'block';
  loaderMessage.style.display = 'none';
}

function showCatInfo(cat) {
  catInfoDiv.innerHTML = `
    <img src="${cat[0].url}">
    <div class="text-info">
      <h1>${cat[0].breeds[0].name}</h1>
      <p>${cat[0].breeds[0].description}</p>
      <p>Temperament: ${cat[0].breeds[0].temperament}</p>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  breedSelect.addEventListener('change', () => {
    const selectedBreedId = breedSelect.value;

    loaderMessage.style.display = 'block';
    loaderMessage.textContent = 'Loading data, please wait...';
    errorMessage.style.display = 'none';
    catInfoDiv.innerHTML = '';

    fetchCatByBreed(selectedBreedId)
      .then(showCatInfo)
      .catch(error => {
        console.error('Error fetching cat:', error);
        errorMessage.style.display = 'block';
        errorMessage.textContent =
          'Oops! Something went wrong! Try reloading the page!';
      })
      .finally(() => {
        loaderMessage.style.display = 'none';
      });
  });

  fetchBreeds()
    .then(populateBreedSelect)
    .catch(error => {
      console.error('Error fetching breeds:', error);
      errorMessage.style.display = 'block';
      errorMessage.textContent =
        'Oops! Something went wrong! Try reloading the page!';
      loaderMessage.style.display = 'none';
    });
});
