import { common } from '../common.js';

/**
 * Clears the localStorage and navigates to the Home page after clicking the Clear basket button.
 *
 * @param {Object} common - An object containing common properties used in the application.
 * @param {string} common.LS_KEY - The key used to store data in localStorage.
 * @returns {void} This function does not return a value.
 */

function handlerClearBasket() {
    localStorage.removeItem(common.LS_KEY);
    location.href = '/index.html';
}

export default handlerClearBasket;