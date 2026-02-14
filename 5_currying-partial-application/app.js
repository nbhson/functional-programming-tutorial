function discount(discount) {
  return (price) => {
    return price * discount;
  };
}
const tenPercentDiscount = discount(0.1);
tenPercentDiscount(500); // $50

const twentyPercentDiscount = discount(0.2);
twentyPercentDiscount(500); // $100
// $500 - $100 = $400
twentyPercentDiscount(5000); // $1000
// $5,000 - $1,000 = $4,000
twentyPercentDiscount(1000000); // $200000
// $1,000,000 - $200,000 = $600,000

console.log(discount(0.1)(500)); // $50
