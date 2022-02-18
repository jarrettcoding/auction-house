async function newFormHandler(event) {
  event.preventDefault();

  const image = document.querySelector("#image");
  const product_name = document.querySelector("#product_name").value.trim();
  const description = document
    .querySelector("#product-description")
    .value.trim();
  const price = document.querySelector("#product-price").value.trim();

  if (product_name && description && price && image) {
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify({
        image,
        product_name,
        description,
        price,
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
