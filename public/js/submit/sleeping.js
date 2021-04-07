const sleepingFormHandler = async (event) => {
  event.preventDefault();
  
  let date = document.querySelector('#date').value;
  const hours = document.querySelector('#sleep-hours').value;

  if (date && hours) {
    date = moment(date).format("M/D/YY");

    const response = await fetch('/api/sleeping', {
      method: 'POST',
      body: JSON.stringify({ date, hours }),
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
  .querySelector('.sleeping-form')
  .addEventListener('submit', sleepingFormHandler);