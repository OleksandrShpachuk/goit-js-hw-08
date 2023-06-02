import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('input[name="email"]');
const textInput = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

let formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

populateForm();

function onFormSubmit(event) {
  event.preventDefault();

  if (isFormEmpty()) {
    return alert('Заповніть всі поля');
  }

  console.log(formData);
  resetForm();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function onFormInput(event) {
  const { name, value } = event.target;
  formData[name] = value;
  saveFormDataToLocalStorage();
}

function populateForm() {
  const savedData = getSavedFormDataFromLocalStorage();

  if (savedData) {
    setInputValue(inputEmail, savedData.email);
    setInputValue(textInput, savedData.message);
    formData = { ...savedData };
  }
}

function setInputValue(input, value) {
  input.value = value;
}

function saveFormDataToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getSavedFormDataFromLocalStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  return JSON.parse(savedData);
}

function isFormEmpty() {
  return textInput.value === '' || inputEmail.value === '';
}

function resetForm() {
  form.reset();
}
