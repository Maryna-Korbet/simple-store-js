import instruments from '../products.json' assert { type: "json" };
import createMarkupPLP from '../templates/templatePLP.js';
import handlerAddTobasket from '../helpers/handlerAddTobasket.js'


const list = document.querySelector('.js-list');

list.insertAdjacentHTML('afterbegin', createMarkupPLP(instruments));

list.addEventListener('click', handlerAddTobasket);

