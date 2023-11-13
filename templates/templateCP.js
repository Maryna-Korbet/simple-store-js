/**
 * Creates HTML markup for an array of items in the basket.
 *
 * @param {Array} arr - The array of cart item objects.
 * @param {string} arr[].img - The URL of the item image.
 * @param {string} arr[].name - The name of the item.
 * @param {number} arr[].qty - The quantity of the item in the cart.
 * @param {number} arr[].price - The price per unit of the item.
 * @returns {string} The HTML markup for the cart items.
 */

function createMarkup(arr) {
    return arr.map(({img, name, qty, price}) => 
        `<li class="cart-item">
            <img src="${img}" alt="${name}" class="product-img" />
            <h2>${name}</h2>
            <p>Quantity: ${qty} шт.</p>
            <p>Total price: ${qty * price} грн</p>
        </li>`).join('');
}

export default createMarkup;