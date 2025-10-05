// Object property shorthand

const { type } = require("os")

const userName = 'Run'
const userAge = 21

const user = {
    userName,
    age: userAge,
    location: 'Waterloo'
}

console.log(user)

// Objects destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.label

// const {label:productLabel, stock, rating} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)