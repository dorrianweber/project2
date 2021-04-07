const spendingFormHandler = async (event) => {
  event.preventDefault();
  
  let date = document.querySelector('#date').value;
  const restaurant = document.querySelector('#restaurant').value||0;
  const coffee = document.querySelector('#coffee').value||0;
  const bar = document.querySelector('#bar').value||0;

  if (date) {
    date = moment(date).format("M/D/YY");

    const response = await fetch('/api/spending', {
      method: 'POST',
      body: JSON.stringify({ date, restaurant, coffee, bar }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.spending-form')
  .addEventListener('submit', spendingFormHandler);