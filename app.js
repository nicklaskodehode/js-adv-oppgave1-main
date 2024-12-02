/******************************************************************************
High order methods assignment

Read the assignment text CAREFULLY. 

Add comments to your code that briefly describe what your code does.

You are provided an object array that represent products for an online store.

Your tasks are:

1. Use .filter() to extract all products that cost less than 200

2. Use .map() to make a list that only contain the product names

3. Use a chained combination of .filter() and .map() to list only
the names of all products in a specific category (e.g. 'electronics')

4. Use .some() to check if there are any products that cost more than 1000

5. Use .reduce() to find the total cost of all the products.

******************************************************************************/

const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" }
  ];

  // filter()
  // I create a function that returns a list filtered by products less than 200
  function filterProducts(productList) {
    return productList.filter(product => product.price < 200);
  }
  console.log(filterProducts(products));

  // other way of doing it
  const filterProducts2 = products.filter(product => product.price < 200);

  console.log(filterProducts2);

  // map()
  // creates a function with 2 parameters, productList and callback.
  function mapProduct(productList, callback){
    return productList.map(callback);
  }
  // uses function to map out the name, first takes the productList (products) and then maps out each products name
  const mappedProducts = mapProduct(products, product => product.name);
  console.log(mappedProducts); 

  // Chained combination of .filter() and .map()
  // first filter out the products in the electronics category, then maps out the names
  const filterMapProduct = products.filter(product => product.category === "electronics").map(product => product.name);
  console.log(filterMapProduct);

  // some()
  // uses some() method to check if theres a products price thats more than 1000, returns true or false (true in the case)
  const someProducts = products.some(product => product.price > 1000);
  console.log(someProducts);

  // reduce()
  // the reduce method takes an accumulator, current value (product) and initialvalue (0)
  products.reduce()
  const totalCost = products.reduce((accumulator,product) => {
    let price = product.price; // declares price and initializes it to the price of the product
    return accumulator + price; // returns accumulator + the price of the product.  
  },0);
  console.log(totalCost);