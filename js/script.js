// #region Instruments
const instruments = [
    
    {
        "id": 1,
        "img": "https://static.dnipro-m.ua/cache/products/5009/catalog_origin_182887.jpg",
        "name": "Шуруповерт",
        "price": 150,
        "description": "Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями."
    },
    {
        "id": 3,
        "img": "https://static.dnipro-m.ua/cache/products/1248/catalog_origin_257336.jpg",
        "name": "Шліфмашина",
        "price": 1299,
        "description": "Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."
    },
    {
        "id": 4,
        "img": "https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",
        "name": "Пила",
        "price": 11049,
        "description": "Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."
    },
    {
        "id": 5,
        "img": "https://static.dnipro-m.ua/cache/products/2300/catalog_origin_261037.jpg",
        "name": "Рівень",
        "price": 897,
        "description": "Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації."
    },
    {
        "id": 6,
        "img": "https://static.dnipro-m.ua/cache/products/6566/catalog_origin_287856.jpg",
        "name": "Тример",
        "price": 3699,
        "description": "Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм."
    },
    {
        "id": 7,
        "img": "https://static.dnipro-m.ua/cache/products/6530/catalog_origin_287574.jpg",
        "name": "Мотокоса",
        "price": 11049,
        "description": "Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2."
    },
    {
        "id": 8,
        "img": "https://static.dnipro-m.ua/cache/products/2745/catalog_origin_284077.jpg",
        "name": "Генератор",
        "price": 10890,
        "description": "Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос."
    }
]
//#endregion

const LS_KEY = 'checkout';

const list = document.querySelector('.js-list');

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

list.insertAdjacentHTML('afterbegin', createMarkup(instruments));

list.addEventListener('click', handlerAddTobasket);

function handlerAddTobasket(e) {
    const { target } = e;
    //перевіряємо чи клікнули на кнопку додавання у кошик Add to basket
    if (!target.classList.contains('js-add')) {
        return;
    }
    
    //зчитуємо номер id продукта, кнопку додавання у кошик якого натиснули
    const product = target.closest('.js-product');
    const productId = Number(product.dataset.productId);

    //знаходимо в масиві продуктів продукт з id, який співпадає з тим, що зчитали
    const currentProduct = instruments.find(({ id }) => id === productId);
    
    //перевіряємо чи масив products буде пустим, або в localStorage є вже будь-який продукт і тоді масив заповнюється інформацією з localStorage
    const products = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];

    //перевіряємо чи вже був доданий в localStorage продукт з таким id, якщо так - збільшуємо кількість на 1, якщо ні - додаємо в масив  products і ставимо кількість 1 
    const idx = products.findIndex(({ id }) => id === productId);
    if (!!(~idx)) {
        products[idx].qty += 1;
    } else {
        currentProduct.qty = 1;
        products.push(currentProduct);
    }

    //записуємо в localStorage масив products
    localStorage.setItem(LS_KEY, JSON.stringify(products));
}