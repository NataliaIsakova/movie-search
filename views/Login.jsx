const React = require('react');
const Layout = require('./Layout');


module.exports = function Login({ login }) {
  return (
    <Layout login={ login }>
      <script defer src="/js/login.js" />
      <form className="loginForm">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Введите ваш логин</label>
          <input name="login" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Введите ваш пароль</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">ВОЙТИ</button>
      </form>
    </Layout>
  );
};
