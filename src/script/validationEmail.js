function checkEmail() {
  let email = document.querySelector('#emailField').value;
  if (!email.includes('@')) {
    alert('Не коректно введет Email');
  } else if (!email.includes('.')) {
    alert('Не коректно введет Email');
  } else alert('Все отлично!');
}
