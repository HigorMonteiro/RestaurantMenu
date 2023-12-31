const menuData = [
  {
    name: 'Protein Salad',
    image: 'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg',
    price: '$10.99',
  },
  {
    name: 'Lean Chicken Wrap',
    image: 'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg',
    price: '$12.99',
  },
  {
    name: 'Power Smoothie',
    image: 'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg',
    price: '$8.99',
  },
  {
    name: 'Quinoa Bowl',
    image: 'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg',
    price: '$11.99',
  },
  {
    name: 'Energy Bar',
    image: 'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg',
    price: '$3.99',
  },
  {
    name: 'Fit Burger',
    image: 'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg',
    price: '$14.99',
  },
  {
    name: 'Fit Burger',
    image: 'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg',
    price: '$14.99',
  },
  {
    name: 'Fit Burger',
    image: 'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg',
    price: '$14.99',
  },
  {
    name: 'Fit Burger',
    image: 'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg',
    price: '$14.99',
  },
  {
    name: 'Fit Burger',
    image: 'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg',
    price: '$14.99',
  },
];

function createMenuItem(item) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const image = document.createElement('img');
  image.src = item.image;
  image.alt = item.name;

  const itemName = document.createElement('h2');
  itemName.textContent = item.name;

  const itemPrice = document.createElement('p');
  itemPrice.textContent = `Preço: R${item.price}`;

  const addToCartBtn = document.createElement('button');
  addToCartBtn.textContent = 'Esconlher';
  addToCartBtn.classList.add('button');
  addToCartBtn.classList.add('button--mustard');

  const buyQuicklyBtn = document.createElement('button');
  buyQuicklyBtn.textContent = 'Levar logo';
  buyQuicklyBtn.classList.add('button');
  buyQuicklyBtn.classList.add('button--coral');

  menuItem.appendChild(image);
  menuItem.appendChild(itemName);
  menuItem.appendChild(itemPrice);
  menuItem.appendChild(addToCartBtn);
  menuItem.appendChild(buyQuicklyBtn);

  return menuItem;
}

const menuSection = document.getElementById('menu');
menuData.forEach((item) => {
  const menuItem = createMenuItem(item);
  menuSection.appendChild(menuItem);
});
