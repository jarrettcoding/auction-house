
async function newFormHandler(event) {
  event.preventDefault();

  const image = document.querySelector("#image").value.trim();
  const product_name = document.querySelector("#product_name").value.trim();
  const description = document
    .querySelector("#product-description")
    .value.trim();
  const price = document.querySelector("#product-price").value.trim();
  const stock = document.querySelector("#product-stock").value.trim();
  const category_id = document.querySelector("#product-category").value.trim();

  if (product_name && description && price && category_id) {
    const response = await fetch(`/api/products`, {
      method: 'POST',
      body: JSON.stringify({
        product_name,
        price,
        stock,
        description,
        image, 
        category_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".new-product-form")
  .addEventListener("submit", newFormHandler);
