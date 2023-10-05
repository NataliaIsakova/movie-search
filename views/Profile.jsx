const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({ login }) {
  return (
    <Layout login={login}>
<script defer src='/js/profile.js'></script>
      <div className="user-profile">
        <div className="user-info">
          <img src="" alt="User" />
          <p>{ login }</p>
          <form action="https://httpbin.org/post" method="post" enctype="multipart/form-data">
    <input name="file" type="file" multiple />
     <button type="submit">Upload</button>
</form>
        </div>
        <div className="favorite-movies">
          <h2>Favorite Movies</h2>
        </div>
      </div>
    </Layout>
  );
};
