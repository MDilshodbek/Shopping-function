var shopping = {
  beef: {
    count: 4,
    price: 12000,
  },
  lamb: {
    count: 4,
    price: 13000,
  },
};

// To create
shopping.chicken = {
  count: 4,
  price: 9000,
};

// To delete
delete shopping.beef;

var lamb = shopping.lamb;
var chicken = shopping.chicken;
var meat_type = chicken;
var cost = 0;

if (meat_type) {
  cost = meat_type.count * meat_type.price;
  console.log(cost);
}

// function total(type) {
//   if (type) {
//     cost = type.count * type.price;
//   }
// }
// total(lamb);
// console.log(cost);
