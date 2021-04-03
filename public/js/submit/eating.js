const eatingFormHandler = async (event) => {
    event.preventDefault();
    
    let date = document.querySelector('#date').value;
    const food_name = document.querySelector('#food_name').value.trim();
    const meal_type = document.querySelector('#meal_type').value;
    const calories = document.querySelector('#calories').value;
    const protein = document.querySelector('#protein').value;
    const fat = document.querySelector('#fat').value;
    const carbs = document.querySelector('#carbs').value;

    if (date && food_name && meal_type && calories) {
      date = moment(date).format('l');

      const response = await fetch('/api/eating', {
        method: 'POST',
        body: JSON.stringify({ date, food_name, meal_type, calories, protein, fat, carbs }),
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
    .querySelector('.eating-form')
    .addEventListener('submit', eatingFormHandler);