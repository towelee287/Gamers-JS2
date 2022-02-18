'use strict';

class ProductList {
  constructor(container = '.products') {
    this._container = document.querySelector(container);
    this._goods = [];
    this._allProducts = [];

    this._fetchGoods();
    this._render();
    this._totalGoodsAmount();
  }

  _fetchGoods() {
    this._goods = [{
        id: 1,
        title: 'Apple MacBook Pro',
        img: 'style/img/notebook.jpg',
        description: 'Супербыстрые чипы M1 Pro и M1 Max дают феноменальную производительность и обеспечивают удивительно долгое время работы без подзарядки. Прибавьте к этому потрясающий дисплей Liquid Retina XDR и ещё больше портов для профессиональной работы. Это тот самый ноутбук, который вы так ждали.',
        price: 294999
      },
      {
        id: 2,
        title: 'Logitech G102 LightSync',
        img: 'style/img/mouse.jpg',
        description: 'Мышь проводная Logitech G102 LIGHTSYNC позволяет играть с максимальной эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком диапазоне отдельной кнопкой. Logitech G102 LIGHTSYNC оснащена 6 программируемыми кнопками. В левой и правой кнопках используется металлический пружинный механизм для исключительно точного срабатывания. Конструкция корпуса обтекаемой формы гарантирует комфорт и точность движений. Система подсветки RGB с фирменной технологией LIGHTSYNC позволяет создать собственный игровой стиль с помощью 16.8 млн оттенков и анимированных эффектов. В программном обеспечении Logitech G HUB можно назначать внутриигровые команды, осуществлять контроль над процессом управления системой и настраивать функциональность клавиш.',
        price: 2299
      },
      {
        id: 3,
        title: 'Razer Ornata V2',
        img: 'style/img/keyboard.jpg',
        description: 'Клавиатура Razer Ornata V2 мембранно-механического типа станет надежным помощником в игровых сетах и позволит вам всегда быть на шаг впереди своих соперников. Классическая полноразмерная модель в пластиковом корпусе состоит из 107 кнопок, 3 из которых являются дополнительными и позволяют управлять возможностями мультимедиа. Для регуляции уровня звука в конструкции модели предусмотрено колесико. Все клавиши дополнены стильной RGB-подсветкой. Самые часто используемые кнопки можно запрограммировать под нужные действия. Удобству использования клавиатуры Razer Ornata V2 служит эргономичная подставка для рук. Так как она имеет съемную конструкцию, при желании ее можно отсоединить. Прочный кабель модели дополнен защитной оплеткой.',
        price: 6299
      },
      {
        id: 4,
        title: 'Samsung Galaxy S22 Ultra',
        img: 'style/img/smartphone.jpg',
        description: 'Samsung Galaxy S22 Ultra получил 6,8-дюймовый AMOLED-дисплей, выполненный по технологии LTPO с разрешением QHD+ и частотой обновления от 1 до 120 Гц. Объем ОЗУ составляет 12 ГБ, емкость накопителя 512 ГБ. Внутри находится батарея на 5000 мА*ч. Мощность быстрой зарядки равна 45 Вт. У смартфона тыльная камера на 108, 12, 10 и 10 Мп. Селфи-камера на 40 Мп. Работает смартфон под управлением Android 12 с фирменной оболочкой One UI 4.0.',
        price: 134999
      },
    ];
  }
  //Метод, который определяет общую стоимость всех товаров
  _totalGoodsAmount() {
    let totalGoodsCost = null;
    for (const product of this._allProducts) {
      totalGoodsCost += product.price;
    }
    this._container.insertAdjacentHTML('afterend', 'Общая стоимость всех товаров: ' + totalGoodsCost + ' рублей.');
  }

  _render() {
    for (const product of this._goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);
      this._container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
    }
  }
}

class ProductItem {
  constructor(product) {
    this.id = product.id;
    this.title = product.title;
    this.img = product.img;
    this.description = product.description;
    this.price = product.price;
  }

  getHTMLString() {
    return `
          <div class="product-item" data-id="${this.id}">
            <h3>${this.title}</h3>
            <img src="${this.img}" alt="product-img" class="product-img">
            <p>${this.price} \u20bd</p>
            <p class="product-description">${this.description}</p>
            <button class="by-btn">Добавить</button>
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