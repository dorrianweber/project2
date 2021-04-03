const categories = document.querySelector('#categories');
const nextBtn = document.querySelector('#category-next');

categories.addEventListener("change", (e) => {
  e.preventDefault();
  console.log(e.target.value);
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const categories = document.querySelector("#categories").value;

  console.log(categories);

  switch (categories) {
    case "eating":
      document.location.replace("/eatingForm");
      break;

    case "sleeping":
      document.location.replace("/sleepingForm");
      break;

    case "spending":
      document.location.replace("/spendingForm");
      break;

    default:
      document.location.replace("/categorySelect");
  }
});