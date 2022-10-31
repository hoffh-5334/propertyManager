const registerFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-register').value.trim();
  const email = document.querySelector('#email-register').value.trim();
  const password = document.querySelector('#password-register').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to register.');
    }
  }
};

document
  .querySelector('.register-form')
  .addEventListener('submit', registerFormHandler);