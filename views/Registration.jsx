const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
        <script defer src='/js/register.js'></script>
      <form className="regForm">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" classNames="form-label">Введите ваш логин</label>
          <input name="login" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Введите ваш пароль</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Введите адрес вашей электронной почты</label>
          <input name="email" type="email" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
      </form>
      <div><h1 className='message'></h1></div>
    </Layout>
  );
};
