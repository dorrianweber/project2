// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#project-name').value.trim();
//   const needed_funding = document.querySelector('#project-funding').value.trim();
//   const description = document.querySelector('#project-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

const init = async () => {
  const eatingData = document.getElementById('eatingData');
  const sleepingData = document.getElementById('sleepingData');
  const spendingData = document.getElementById('spendingData');
  const eatingRequest = await fetch('/api/eating', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const sleepingRequest = await fetch('/api/sleeping', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const spendingRequest = await fetch('/api/spending', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  eatingData;
  sleepingData;
  spendingData;

  //data still needs to be inserted into handlebars
};

init();