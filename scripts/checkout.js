import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// runs all the code inside the file
// import '../data/cart-class.js';
// import '../data/backend-practice.js'

// run the async function (loadproducts), wait for it to finish
// then run resolve. Resolve makes it go to the next step


Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve('value1');
        });
    }),
    new Promise((resolve) => {
        loadCart(() => {
            resolve('value2');
        });
    })

]).then((value) => {
    console.log(value)
    renderOrderSummary();
    renderPaymentSummary();
})



/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');
    });

}).then((value) => {
    console.log(value)
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/

// loadproduct is an async function. It runs its arrow function after it has finished running
/*
loadProducts(() => {
    loadCart(() => {
        
    });   
})
*/
