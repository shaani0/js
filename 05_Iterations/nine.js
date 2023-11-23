const mynums = [1,2,3]

// const Total = mynums.reduce( function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// const Total = mynums.reduce( (acc,currval) => 
// acc+currval, 0)
// // console.log(Total);

const shoppingcart = [
    {
        CourseName: "js course",
        price: 2999
    },
    {
        CourseName: "cpp course",
        price: 5999
    },
    {
        CourseName: "py course",
        price: 4999
    },
    {
        CourseName: "java course",
        price: 7999
    }
]

const priceToPay = shoppingcart.reduce( (acc,item) => acc+item.price,0)
console.log(priceToPay);
