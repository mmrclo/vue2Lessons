var app = new Vue({
    el: '#app',  
    data: {
        product: "Socks",
        description: "Socks scks ? .... !-!",
        image: "./images/vmSocks-green-onWhite.jpg",
        altText: "Pair of Socks",
        outSidesrc: "https://en.wikipedia.org/wiki/Sock",
        inventory: 11,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-Neutral"],
        variants: [
            {
                variantId:1234,
                variantColor:"Green"
            },
            {
                variantId:1235,
                variantColor:"Blue"
            }
        ],
        sizes: ["34 - 37","38 - 42","43 - 47"]
    }

})

