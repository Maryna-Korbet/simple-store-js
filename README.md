# simple-store-js

An example of a simple online store

## Tasks:

### In English:

To create an online store with 2 pages.

The Home page should:

Contain product cards (they can be found in the products.json file) (an example of one card [https://prnt.sc/klV2uzLIcG8w]).
Implement event delegation for adding products to the cart on the list of products.
Use Local Storage for adding products to the cart.
During addition, control the quantity of added products by creating a new key 'quantity' in the added product object.
The Checkout page should:

Have a list of cards for added products, each card should include the quantity of purchased items and the total cost for that item (an example of one card [https://prnt.sc/ssZA4rzw1x9L]).
Display a message about the total purchase cost; if the cart is empty, display the message "Your basket is empty."
Have a button to clear the cart; upon pressing, all items are removed, and the user is redirected to the Home page."

### In Ukrainian:

Потрібно створити інтернет-магазин в якому буде 2 сторінки.

Сторінка Home має:

1. Містити картки товарів (їх можна знайти в файлі products.json)
   (приклад однієї картки [https://prnt.sc/klV2uzLIcG8w]).
2. На списку товарів реалізовано делегування подій на додавання товару в кошик.
3. Для додавання товару в кошик використовуй LS.
4. Під час додавання контролюй кількість доданих товарів, для цього створи в об'єкті доданого товару новий ключ quantity.

Сторінка Checkout має:

1. Список карток доданих товарів, кожна картка має містити кількість куплених товарів та загальна вартість за даний товар
   (приклад однієї картки [https://prnt.sc/ssZA4rzw1x9L]).
2. Повідомлення про загальну вартість покупки, якщо кошик порожній, то повідомлення "Your basket is empty".
3. Кнопку для очищення кошика, після натискання на неї всі товари видаляються, а користувача перенаправляємо на сторінку Home.
