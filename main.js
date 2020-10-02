var app = new Vue({
    el: '#app',  
    data: {
        
        product: "Socks",
        brand: "Vue Mastery",
        description: "Socks scks ? .... !-!",
        selectedVariant: 0,
        //image: "./images/vmSocks-blue-onWhite.jpg",
        altText: "Pair of Socks",
        outSidesrc: "https://en.wikipedia.org/wiki/Sock",
        inventory: 13,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-Neutral"],
        variants: [
            {
                variantId:1234,
                variantColor:"Green",
                variantImage: "./images/vmSocks-green-onWhite.jpg",
                variantQtd: 10
            },
            {
                variantId:1235,
                variantColor:"Blue",
                variantImage: "./images/vmSocks-blue-onWhite.jpg",
                variantQtd: 0
            }
        ],
        sizes: ["34 - 37","38 - 42","43 - 47"],
        cart: 0,
        //inStock: true
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index){
            this.selectedVariant = index;
        },
        rmvFromCart: function() { //BEFORE ES6
            this.cart -= 1
        },
        stock() {
            if(this.inventory > 0) this.inStock = true;
            else this.inStock = false;
        } 
    },
    computed: {
        title() {
            if(this.onSale)
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQtd
        }
        
    }

})

