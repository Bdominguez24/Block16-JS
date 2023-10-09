//Subscriptions receive a 25% discount after the refill total has been calculated.
//Coupons receive a $10 discount after the subscription discount has been calculated.
//At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 

const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
}

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
}

function priceTotal(customer) {
  let totalCost = customer.pricePerRefill * customer.refills

  if (customer.subscription){
    totalCost *= 0.75;
  }
  
  if (customer.coupon){
    totalCost -= 10;
  }

  return totalCost
}

const timmyTotal = priceTotal(timmy)
const sarahTotal = priceTotal(sarah)
const rockyTotal = priceTotal(rocky)

console.log(timmyTotal)
console.log(sarahTotal)
console.log(rockyTotal)