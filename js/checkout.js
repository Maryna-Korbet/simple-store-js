const elements = {
    list: document.querySelector('.js-list'),
    cost: document.querySelector('.js-cost'),
    clearBtn: document.querySelector('.js-clear'),
}

const LS_KEY = 'checkout';

//перевіряємо чи пустий basket
const products = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];

let totalCost;

//перевіряємо чи є в basket товари, якщо є -показуємо кнопку Clear basket  та  підраховуємо їх загальну вартість 
if (products.length) {
    elements.clearBtn.hidden = false;
    totalCost = products.reduce((acc, { qty, price }) => acc + qty * price, 0);
}

//в залежності від того чи є товари в basket виводимо одне чи інше повідомлення
elements.cost.textContent = totalCost ? `Total cost: ${totalCost} грн` : `Your basket is empty.`;

//генеруємо розмітку basket
elements.list.insertAdjacentHTML("afterbegin", createMarkup(products));

elements.clearBtn.addEventListener('click', handlerClearBasket);

//функція генерації розмітки basket
function createMarkup(arr) {
    return arr.map(({img, name, qty, price}) => 
        `<li class="cart-item">
            <img src="${img}" alt="${name}" class="product-img" />
            <h2>${name}</h2>
            <p>Quantity: ${qty} грн</p>
            <p>Total price: ${qty * price} грн</p>
        </li>`).join('');
}

//функція очищення localStorage та одночасного повернення на сторінку Home після наптискання кнопки Clear basket
function handlerClearBasket() {
    localStorage.removeItem(LS_KEY);
    location.href = '../index.html';
}



