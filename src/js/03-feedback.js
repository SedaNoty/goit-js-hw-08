import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
const data = {};

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

checkData();

function onFormInput(event) {
  data[event.target.name] = event.target.value;
  localStorage.setItem(KEY, JSON.stringify(data));
}

function onFormSubmit(event) {
  console.log(JSON.parse(localStorage.getItem(KEY)));
  event.preventDefault();
  formEl.reset();
  localStorage.removeItem(KEY);
}

function checkData() {
  let storageData = localStorage.getItem(KEY);
  if (storageData) {
    storageData = JSON.parse(storageData);
    Object.entries(storageData).forEach(([name, value]) => {
      data[name] = value;
      formEl.elements[name].value = value;
    });
  }
}