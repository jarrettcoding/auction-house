const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let products = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  products.forEach(product => {
    const isVisible =
      product.product_name.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value)
    products.element.classList.toggle("hide", !isVisible)
  })
})

fetch("/api/products")
  .then(res => res.json())
  .then(data => {
    users = data.map(product => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = product.product_name
      body.textContent = product.category
      userCardContainer.append(card)
      return { product: product.product_name, category: product.category, element: card }
    })
  })