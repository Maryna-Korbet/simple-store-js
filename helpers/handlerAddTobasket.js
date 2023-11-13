import instruments from '../products.json' assert { type: "json" };
import { common } from '../common.js';

/**
 * Handles the addition of a product to the basket upon button click.
 *
 * @param {Event} e - The click event object.
 * @param {HTMLElement} e.target - The target element of the click event.
 * @returns {void} This function does not return a value.
 */

function handlerAddTobasket(e) {
    const { target } = e;
    //Check if the click is on the "Add to basket" button
    if (!target.classList.contains('js-add')) {
        return;
    }
    
    //Read the product ID from the button clicked for adding to the basket
    const product = target.closest('.js-product');
    const productId = Number(product.dataset.productId);

    //Find the product in the products array with the matching ID
    const currentProduct = instruments.find(({ id }) => id === productId);
    
    //Check if the products array will be empty, or if there is already any product in localStorage, then fill the array with information from localStorage
    const products = JSON.parse(localStorage.getItem(common.LS_KEY)) ?? [];

    //Check if a product with the same ID is already added to localStorage; if yes, increase the quantity by 1; if no, add to the products array with a quantity of 1
    const idx = products.findIndex(({ id }) => id === productId);
    if (!!(~idx)) {
        products[idx].qty += 1;
    } else {
        currentProduct.qty = 1;
        products.push(currentProduct);
    }

    //Write the products array to localStorage
    localStorage.setItem(common.LS_KEY, JSON.stringify(products));
}

export default handlerAddTobasket;