// var products = {};

// console.log(cart({ type: "buy", p_name: "lamb", price: 6000, count: 4 }));
// console.log(cart({ type: "buy", p_name: "beef", price: 9000, count: 2 }));
// console.log(cart({ type: "buy", p_name: "chicken", price: 8000, count: 4 }));
// console.log(cart({ type: "cancel", p_name: "beef", price: 6000, count: 4 }));

// function cart(items) {
//   switch (items.type) {
//     case "buy":
//       products[items.p_name] = {
//         price: items.price,
//         count: items.count,
//       };
//       break;
//     case "cancel":
//       delete products[items.p_name];
//   }

//   sum = 0;
//   var goods = Object.values(products);

//   for (let i = 0; i < goods.length; i++) {
//     sum += goods[i].price * goods[i].count;
//   }
//   return {
//     products: products,
//     total_count: goods.length,
//     total_price: sum,
//   };
// }

// Method 2 with If

var products = {};
function cart(shoes) {
  if (shoes.type === "buy") {
    products[shoes.name] = {
      count: shoes.count,
      price: shoes.price,
    };
  } else if (products.type === "cancel") delete products[name];

  var sum = 0;
  var sneakers = Object.values(products);

  for (let i = 0; i < sneakers.length; i++) {
    sum += sneakers[i].count * sneakers[i].price;
  }
  return { products: products, count: sneakers.length, total_price: sum };
}

console.log(cart({ type: "buy", name: "Nike", price: 90, count: 2 }));
console.log(cart({ type: "buy", name: "New balance", price: 110, count: 1 }));
console.log(cart({ type: "cancel", name: "Nike" }));

// Methode 3 with Switch

// function cart(shoes) {
//   switch (shoes.type) {
//     case "buy":
//       products[shoes.name] = {
//         count: shoes.count,
//         price: shoes.price,
//       };
//       break;
//     case "cancel":
//       delete products[shoes.name];
//   }

//   var sum = 0;
//   var sneakers = Object.values(products);

//   for (let i = 0; i < sneakers.length; i++) {
//     sum += sneakers[i].count * sneakers[i].price;
//   }
//   return { products: products, count: sneakers.length, total_price: sum };
// }

// console.log(cart({ type: "buy", name: "Nike", price: 90, count: 2 }));
// console.log(cart({ type: "buy", name: "Adidas", price: 80, count: 2 }));
// console.log(cart({ type: "buy", name: "New balance", price: 110, count: 1 }));
// console.log(cart({ type: "cancel", name: "Nike" }));
