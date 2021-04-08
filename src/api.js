const searchUrl = "https://movie-database-imdb-alternative.p.rapidapi.com/?s=";
const resultUrl = "https://movie-database-imdb-alternative.p.rapidapi.com/?i=";
const filmImageUrl = "https://imdb-api.com/en/API/Images/k_7k2jd8s5/";
const filmTrailerUrl = "https://imdb-api.com/en/API/YouTubeTrailer/k_7k2jd8s5/";
const similarFilmUrl = "https://imdb-api1.p.rapidapi.com/Title/k_7k2jd8s5/";

export const searchApi = (title) => {
  return fetch(`${searchUrl}${title}&page=1&r=json`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "cb96c50c16msh8c92725cb44ccf7p1899c4jsn20d46b46b8fc",
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
    }
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .catch((err) => {
      console.error(err);
    });
};

export const resultApi = (id) => {
  return fetch(`${resultUrl}${id}&r=json`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "cb96c50c16msh8c92725cb44ccf7p1899c4jsn20d46b46b8fc",
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
    }
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .catch((err) => {
      console.error(err);
    });
};

export const filmImageApi = (id) => {
  return fetch(`${filmImageUrl}${id}`, {
    method: "GET"
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .catch((err) => {
      console.error(err);
    });
};

export const filmTrailerApi = (id) => {
  return fetch(`${filmTrailerUrl}${id}`, {
    method: "GET"
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .catch((err) => {
      console.error(err);
    });
};

export const similarApi = (id) => {
  return fetch(`${similarFilmUrl}${id}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "cb96c50c16msh8c92725cb44ccf7p1899c4jsn20d46b46b8fc",
      "x-rapidapi-host": "imdb-api1.p.rapidapi.com"
    }
  })
  .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
  .catch(err => {
    console.error(err);
  });
};
