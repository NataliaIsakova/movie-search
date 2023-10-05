const loginForm = document.querySelector('.loginForm');
console.log(loginForm);
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const date = new FormData(loginForm);
  console.log(date);
  const result = Object.fromEntries(date);
  console.log(result);

  if (!result.login || !result.password) {
    alert('заполните данные');
  } else {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result),
      });
      const res = await response.json();
      if (res.err) {
        alert('не верно указаны данные')
        document.querySelectorAll('input').forEach((el) => el.value = '');
      } else {
        window.location.href = '/';
      }
    } catch (error) {
      alert(`ERROR: ${error}`);
    }
  }
});
