async function newFormHandler(event) {
  event.preventDefault();

  const image = document.querySelector("#image");
  const product_name = document.querySelector("#product_name").value.trim();
  const description = document
    .querySelector("#product-description")
    .value.trim();
  const price = document.querySelector("#product-price").value.trim();
  const stock = document.querySelector("#product-stock").value.trim();
  const category_id = document.querySelector("#product-category").value.trim();

  if (product_name && description && price && stock && category_id && image) {
    window.location.assign('/dashboard');
  } else {
    alert('Please check your input');
  }
}

document
  .querySelector("#form")
  .addEventListener("submit", newFormHandler);
