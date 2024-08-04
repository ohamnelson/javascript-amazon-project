// allows this variable to be used outside of this file
export let cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}];


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

export function removeFromCart(productId) {
    const newCart = []
    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId) {
            newCart.push(cartItem);
        }

    })

    cart = newCart;


}
