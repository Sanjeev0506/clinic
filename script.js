const form = document.getElementById('appointmentForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const age = document.getElementById('age').value;
  const problem = document.getElementById('problem').value;

  const formData = new FormData();
  formData.append('name', name);
  formData.append('phone', phone);
  formData.append('age', age);
  formData.append('problem', problem);

  fetch('https://script.google.com/macros/s/AKfycbwlYDkX7zeWq4YUxy4wELmFbN1IjRYUDp44IP45MnfXw5-7dxnJx45iokrL_KNQuUAfjg/exec', {
    method: 'POST',
    body: formData
  })
  .then(() => {
    alert('Your appointment has been submitted successfully!');
    form.reset();
  })
  .catch((error) => {
    alert('There was an error submitting your appointment. Please try again.');
    console.error(error);
  });
});


