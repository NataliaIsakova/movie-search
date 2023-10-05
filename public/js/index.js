const { searchForm } = document.forms;
const container = document.querySelector('.container');

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = new FormData(searchForm);
  const movies = Object.fromEntries(form);
  const response = await fetch(`http://www.omdbapi.com/?apikey=a69781f9&s=${movies.getInfo}}`);
  const result = await response.json();
  console.log(result);

  container.innerHTML = '';
  result.Search.forEach((element, index) => {
    const cart = `
    
    <div class ='movieForm' id=${element.imdbID
}>
    <img src='${element.Poster}' alt='${element.Title}' />
    <h3>'${element.Title}'</h3>
    <p>'${element.Year}'</p>
    <button class='btnAdd' id='${element.imdbID
}'>Добавить в избранное</button>
  </div>

    `;
    container.insertAdjacentHTML('beforeend', cart);
    const btnAdd = document.querySelector(`#${element.imdbID
    } `);
    btnAdd.addEventListener('click', async (event) => {
      event.preventDefault();
      const movieData = {
        title: element.Title,
        year: element.Year,
        poster: element.Poster,
        num: element.imdbID,
      };
      console.log(movieData);

      const resp = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movieData),
      });
    });
  });
});

