const passwordInput = document.getElementById('pwd');
const eyeSlashFill = document.getElementById('eye-icon');

eyeSlashFill.addEventListener('click', () => {
  if(passwordInput.type == "password") {
    passwordInput.type = "text";
    eyeSlashFill.classList.add("bi-eye-fill");
    eyeSlashFill.classList.remove("bi-eye-slash-fill")
  }else {
    passwordInput.type = "password";
    eyeSlashFill.classList.add("bi-eye-slash-fill");
    eyeSlashFill.classList.remove("bi-eye-fill")
  }
})

const email_input = document.getElementById('email');
const password_input = document.getElementById('pwd')

email_input.addEventListener('focus', ()=> {
  email_input.style.borderLeft = '4px solid #3751FE';
});

email_input.addEventListener('blur', function() {
  email_input.style.borderLeft = '';
});

password_input.addEventListener('focus', ()=> {
  password_input.style.borderLeft = '4px solid #3751FE';
});

password_input.addEventListener('blur', function() {
  password_input.style.borderLeft = '';
});