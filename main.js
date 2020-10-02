var app = new Vue({
    el: '#app',  
    data: {
        product: "Socks",
        description: "Socks scks ? .... !-!",
        image: "./images/vmSocks-blue-onWhite.jpg",
        altText: "Pair of Socks",
        outSidesrc: "https://en.wikipedia.org/wiki/Sock",
        inventory: 13,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-Neutral"],
        variants: [
            {
                variantId:1234,
                variantColor:"Green",
                variantImage: "./images/vmSocks-green-onWhite.jpg"
            },
            {
                variantId:1235,
                variantColor:"Blue",
                variantImage: "./images/vmSocks-blue-onWhite.jpg"
            }
        ],
        sizes: ["34 - 37","38 - 42","43 - 47"],
        cart: 0,
        inStock: true
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage){
            this.image = variantImage;
        },
        rmvFromCart: function() { //BEFORE ES6
            this.cart -= 1
        },
        stock() {
            if(this.inventory > 0) this.inStock = true;
            else this.inStock = false;
        } 
    },
    beforeMount(){
        this.stock();
    }

})

