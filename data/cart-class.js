class Cart {
    cartItems;
    #localStorageKey; 

    // The constructor object runs after the class has been created.
    // this points to the object we generate. It is used for set up code.
    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    #loadFromStorage() {
        // this accesses the outer object
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [
            {
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            }, {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
        }];
        
    }

    saveToStorage() {
        /*
        localstorage only takes strings. 
        So convert Javascript object to json
        */
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId) {
        /* this function takes a productId, checks if the product 
        is in the cart. If yes, it updates the products quantity.
        if no, it inserts the product into the cart*/
        let matchingItem;
    
        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId){
                // save the matching object 
                matchingItem = cartItem
            }
        })
        if(matchingItem) {
            matchingItem.quantity += 1
        }
        else {
            this.cartItems.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId:'1'
            })
        }
        this.saveToStorage();
    
    }

    removeFromCart(productId) {
        const newCart = []
        this.cartItems.forEach((cartItem) => {
            if(cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
    
        })
    
        this.cartItems = newCart;
        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        /*takes a productId and a choice id for delivery. Uses the productId to find the 
        product to be updated and sets that products deliveryoption to the deliveryoptionId 
        parameter.*/    
            let matchingItem;
        
            this.cartItems.forEach((cartItem) => {
                if(productId === cartItem.productId){
                    // save the matching object 
                    matchingItem = cartItem
                }
            })
            matchingItem.deliveryOptionId = deliveryOptionId
        
            this.saveToStorage();
        }
        

};

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');




console.log(cart)
console.log(businessCart)

console.log(businessCart instanceof Cart);


