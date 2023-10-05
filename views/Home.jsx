const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ login, data }) {
  return (
    <Layout login={login}>
      {login ? (
          <div className="container">
            {data.map((movie, index) => (
              <div key={index}>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <button type="submit">Добавить в избранное</button>
              </div>
            ))}
          </div>


      ) : (<p>Привет</p>)}
    </Layout>
  );
};
