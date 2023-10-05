const form = document.querySelector('.regForm');
const message = document.querySelector('.message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  console.log('======>', data)
  const inputs = Object.fromEntries(data);
  console.log(inputs)
  if (!inputs.login || !inputs.password || !inputs.email) {
    alert('введите данные');
  } else {
    const response = await fetch('/regist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs),
    });

    const result = await response.json();

    // обрабатывает ответ с сервера
    if (result.message) {
      window.location = '/';
    } else {
      message.innerHTML = 'Ошибка регистрации, попробуйте еще раз';
    }
    form.querySelectorAll('input').forEach((el) => {
      el.value = '';
    });
  }
});
