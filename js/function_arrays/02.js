let store = [
    { product_name: 'RAM', year_of_production: 2022, price: 50, quantity: 10, discount: 0.2 },
    { product_name: 'CPU', year_of_production: 2021, price: 100, quantity: 5, discount: 0.1 },
    { product_name: 'Graphics Card', year_of_production: 2022, price: 60, quantity: 8, discount: 0 },
    { product_name: 'SSD', year_of_production: 2023, price: 20, quantity: 15, discount: 0.3 },
    { product_name: 'Power Supply', year_of_production: 2020, price: 30, quantity: 3, discount: 0.15 },
]

let items = store.filter(product => product.price < 50)
let product_names = items.map(product => product.product_name)
console.log(product_names)

let sum = store.reduce((total, product) => total + product.quantity, 0)
console.log(sum)

let product_names_mapped = store.map(product => product.product_name);
console.log(product_names_mapped)