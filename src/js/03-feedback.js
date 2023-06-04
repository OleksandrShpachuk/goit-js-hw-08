import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('.feedback-form input');
const textInput = form.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';

let formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

populateForm();

function onFormSubmit(event) {
  event.preventDefault();

  if (textInput.value === '' || inputEmail.value === '') {
    return alert('Заповніть всі поля');
  }

  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData.email) {
    inputEmail.value = savedData.email;
    formData.email = savedData.email;
  }

  if (savedData.message) {
    textInput.value = savedData.message;
    formData.message = savedData.message;
  }
}
