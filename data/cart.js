// allows this variable to be used outside of this file
export const cart = [];


export function addToCart(productId) {
    /* this function takes a productId, checks if the product 
    is in the cart. If yes, it updates the products quantity.
    if no, it inserts the product into the cart*/
    let matchingItem;

            cart.forEach((cartItem) => {
                if(productId === cartItem.productId){
                    // save the matching object 
                    matchingItem = cartItem
                }
            })
            if(matchingItem) {
                matchingItem.quantity += 1
            }
            else {
                cart.push({
                    productId: productId,
                    quantity: 1
                })
            }
}
