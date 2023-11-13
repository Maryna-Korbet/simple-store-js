import createMarkupCP from '../templates/templateCP.js';
import handlerClearBasket from '../helpers/handlerClearBasket.js';
import { common } from '../common.js';

const elements = {
    list: document.querySelector('.js-list'),
    cost: document.querySelector('.js-cost'),
    clearBtn: document.querySelector('.js-clear'),
}

//Check if the basket is empty
const products = JSON.parse(localStorage.getItem(common.LS_KEY)) ?? [];

let totalCost;

//Check if there are products in the basket; if yes - show the Clear basket button and calculate their total cost
if (products.length) {
    elements.clearBtn.hidden = false;
    totalCost = products.reduce((acc, { qty, price }) => acc + qty * price, 0);
}

//Depending on whether there are products in the basket, display one or another message
elements.cost.textContent = totalCost ? `Total cost: ${totalCost} грн` : `Your basket is empty.`;

//Generate the basket markup
elements.list.insertAdjacentHTML("afterbegin", createMarkupCP(products));

//Clear localStorage
elements.clearBtn.addEventListener('click', handlerClearBasket);