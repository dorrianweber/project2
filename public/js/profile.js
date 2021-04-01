const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

const init = async () => {
  const eatingRequest = await fetch('/api/eating', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const sleepingData = await fetch('/api/sleeping', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const spendingData = await fetch('/api/spending', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  eatingData.textContent(eatingRequest);

  //data still needs to be inserted into handlebars
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);

const eatingData = document
  .querySelector('.eatingData')

  init();