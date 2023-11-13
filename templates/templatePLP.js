/**
 * Creates HTML markup for an array of products on Home page.
 *
 * @param {Array} arr - The array of product objects.
 * @param {number} arr[].id - The unique identifier for each product.
 * @param {string} arr[].img - The URL of the product image.
 * @param {string} arr[].name - The name of the product.
 * @param {number} arr[].price - The price of the product.
 * @param {string} arr[].description - The description of the product.
 * @returns {string} The HTML markup for the products.
 */

function createMarkup(arr) {
    return arr.map(({ id, img, name, price, description }) => 
    ` <li class="product-card js-product" data-product-id="${id}">
        <img src="${img}" alt="${name}" class="product-img" />
        <h2 class="product-title">${name}</h2>
        <p class="product-description">${description}</p>
        <p class="product-price">${price} грн</p>
        <button  class="product-add-btn js-add" type="button">Add to basket</button>
    </li>`).join('')
}

export default createMarkup;