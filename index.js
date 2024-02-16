var products = {};

function cart(items) {
  switch (items.type) {
    case "buy":
      products[items.p_name] = {
        price: items.price,
        count: items.count,
      };
      break;
    case "cancel":
      delete products[items.p_name];
  }

  sum = 0;
  var goods = Object.values(products);

  for (let i = 0; i < goods.length; i++) {
    sum += goods[i].price * goods[i].count;
  }
  return {
    products: products,
    total_count: Object.keys(products).length,
    total_price: sum,
  };
}

console.log(cart({ type: "buy", p_name: "lamb", price: 6000, count: 4 }));
console.log(cart({ type: "buy", p_name: "beef", price: 9000, count: 2 }));
console.log(cart({ type: "buy", p_name: "chicken", price: 8000, count: 4 }));
console.log(cart({ type: "cancel", p_name: "beef", price: 6000, count: 4 }));
