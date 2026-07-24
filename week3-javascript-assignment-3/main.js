
// Task 1: Object Management

const smartProduct = {
    id: 201,
    title: "Wireless Headphones",
    price: 120,
    tags: ["electronics", "audio", "wireless"],

    updatePrice(newPrice) {
        this.price = newPrice;
    }
};

smartProduct.updatePrice(99.99);

console.log("TASK 1 RESULT");
console.log("Updated Product:", smartProduct);


// Task 2: User Database

const userDatabase = [];

function registerUser(id, name, role) {
    const user = {
        id,
        name,
        role
    };

    userDatabase.push(user);
}

registerUser(1, "Sarah", "Admin");
registerUser(2, "Ali", "Editor");
registerUser(3, "Hina", "Customer");

console.log("\nTASK 2 RESULT");
console.log(userDatabase);


// Task 3: Low Stock Search

const storeInventory = [
    {
        name: "Laptop",
        stockCount: 15,
        category: "Electronics"
    },
    {
        name: "Notebook",
        stockCount: 4,
        category: "Stationery"
    },
    {
        name: "Coffee Mug",
        stockCount: 9,
        category: "Kitchen"
    },
    {
        name: "Keyboard",
        stockCount: 2,
        category: "Electronics"
    }
];

const findLowStockItems = (threshold) => {

    const lowStock = [];

    for (let i = 0; i < storeInventory.length; i++) {

        if (storeInventory[i].stockCount < threshold) {
            lowStock.push(storeInventory[i]);
        }

    }

    return lowStock;
};

console.log("\nTASK 3 RESULTS");
console.log(findLowStockItems(10));


// Task 4: Discounted Prices

const prices = [180, 320, 95, 450, 210];

const discountedPrices = [];

for (let i = 0; i < prices.length; i++) {
    discountedPrices.push(prices[i] * 0.85);
}

console.log("\nTASK 4 RESULTS ");
console.log("Original Prices:", prices);
console.log("Discounted Prices:", discountedPrices);