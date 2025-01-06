const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const saveToLS = () => {
  localStorage.setItem(storageKey, JSON.stringify(formData));
};

const loadFromLS = () => {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
};

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveToLS();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Please fill all fields');
    return;
  }

  console.log('Submitted Data:', formData);

  localStorage.removeItem(storageKey);
  formData = { email: '', message: '' };
  form.reset();
});

loadFromLS();
