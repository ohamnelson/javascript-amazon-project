const xhr = new XMLHttpRequest();

let productsData
xhr.addEventListener('load', () => {
    productsData = xhr.response;
    console.log(productsData)

})

xhr.open('GET', 'https://supersimplebackend.dev')
// asynchronous code does not wait for the code to finsih before moving on
xhr.send()