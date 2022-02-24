'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let getRequest = (url, cb) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status !== 200) {
        console.log('Error');
      } else {
        cb(xhr.responseText);
      }
    }
  };

  xhr.send();
};

class ProductList {
  constructor(container = '.products') {
    this._container = document.querySelector(container);
    this._goods = [];
    this._allProducts = [];

    this.getProducts()
      .then((data) => {
        this._goods = data;
        this._render();
      });
  }

  sum() {
    return this._allProducts.reduce((sum, {
      price
    }) => sum + price, 0);
  }

  getProducts() {
    return fetch(`${API}/catalogData.json`)
      .then((response) => response.json())
      .catch((err) => console.log(err));
  }

  _render() {
    console.log('rendering data...');
    for (const product of this._goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);
      this._container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
    }
  }
}

class ProductItem {
  constructor(product) {
    this.id = product.id_product;
    this.name = product.product_name;
    this.price = product.price;
  }

  getHTMLString() {
    return `
          <div class="product-item">
            <h3>${this.name}</h3>
            <p>${this.price} \u20bd</p>
            <button class="buy-btn" data-id="${this.id}">Добавить</button>
          </div>
          `;
  }
}

new ProductList();

//Корзина товаров:
class Cart {
  constructor(container = '.cart') {
    this._container = document.querySelector(container);
    //Сама корзина будет представлять собой массив, в который будут падать объекты товаров, поэтому:
    this._basket = [];

    this._checkBasket();
  }

  //Для начала метод, проверяющий, есть ли в корзине что-то или она пуста. Если пусто, то пишет "ваша корзина пуста"

  _checkBasket() {

  }

  //Метод для добавления товара в корзину. Он не будет приватным, т.к. его будет вызывать кнопка "добавить" в списке товаров в другом классе
  addItemToBasket() {

  }

  //Также мы должны иметь возможность удалить товар из корзины
  _deleteItemFromBasket() {

  }

  //Подсчет полной стоимости добавленных товаров в корзину
  _basketTotal() {

  }

  //Метод для отрисовки html-разметки корзины, если там есть товары
  _renderBasketHTML() {

  }
}

new Cart();