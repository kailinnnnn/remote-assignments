function max(numbers) {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > answer) {
      answer = numbers[i];
    }
  }
  return answer;
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7
//
//
//
//
//
//Assignment 2: Function and Object
//Complete the function below to calculate the result of the passing object.
function calculate(args) {
  if (args.op === "+") {
    return args.n1 + args.n2;
  } else if (args.op === "-") {
    return args.n1 - args.n2;
  } else {
    return "Not supported";
  }
}
console.log(calculate({ n1: 2, n2: 3, op: "+" })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: "-" })); // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: "x" })); // expected output: 'Not supported'
//
//
//
//
//
//Assignment 3: Function, Array, and Object
//Complete the function below to calculate the total price of all products after applying a
//discount.
function calculate(data) {
  let total = 0;
  for (let i = 0; i < data.products.length; i++) {
    total += data.products[i].price;
  }
  return total - total * data.discount;
}
const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});
console.log(discountedPrice); // show the total price of all products after applying a discount
