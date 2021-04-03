const categories = document.querySelector('#categories');
const nextBtn = document.querySelector('#category-next');
const eatingSubmit = document.querySelector('#eatingSubmit');
const sleepingSubmit = document.querySelector('#sleepingSubmit');
const spendingSubmit = document.querySelector('#spendingSubmit');

categories.addEventListener("change", (e) => {
    e.preventDefault();
    console.log(e.target.value);
});

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const categories = document.querySelector('#categories').value;

    console.log(categories);

    switch(categories) {
        case "eating":
            document.location.replace('/eatingForm');
        break;

        case "sleeping":
            document.location.replace('/sleepingForm');
        break;

        case "spending":
        document.location.replace('/spendingForm');
        break;

        default:
        document.location.replace('/submit');
    };
});

// const eatingFormHandler = async (event) => {
//     event.preventDefault();
    
//     const mealType = document.querySelector('#mealType').value;
//     const calories =  document.querySelector('#calories').value.trim();
//     const protein =  document.querySelector('#protein').value.trim();
//     const fat =  document.querySelector('#fat').value.trim();
//     const carbs =  document.querySelector('#carbs').value.trim();

//     const response = await fetch('')
// };

// submitBtn.addEventListener("click", (e) => {
//     e.preventDefault();
    
// });

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };