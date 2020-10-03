Vue.component('product-details', { //This example of bind to another component works with the dev version https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js but not with https://cdn.jsdelivr.net/npm/vue
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: 
        `<ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>`
    
})




Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        },
        
    },
    template: `
    <div class="product">
    
        <div class="product-image">
            <img :src="image" v-bind:alt="altText"/>
        </div>

        <div class="product-info">
            <h1 v-if="onSale" v-bind:src="title" > {{title}} </h1>
            <p> {{description}} </p>
            <span v-if="onSale">On sale!</span>
            <p>Shipping: {{ shipping }} </p>

            <product-details :details="details"></product-details>

            <p v-if="inStock">In stock</p>
            <!--<p v-else-if="inventory > 0 && inventory <= 10 ">Almost Out of stock</p>-->
            <p v-else id="lineThrough"
            
            >Out of stock</p>
            

                
            
    
            <div  class="color-box"
                v-for="(variant, index) in variants"
                :key="variant.variantId"
                :style="{ backgroundColor: variant.variantColor }"
                @mouseover="updateProduct(index)"
                >
            </div>
            
    
    
            <ul v-for="size in sizes">
                <li>{{size}}</li>
            </ul>
      
                <a v-bind:href="outSidesrc" target="_blank">What is socks ?</a><br>
            <table>    
            <tr>
                <td><button v-on:click="addToCart" 
                            :disabled="!inStock"
                            :class="{disabledButton: !inStock }"
                            >Add to cart
                </button></td>
                <td><button v-on:click="rmvFromCart">Remove from cart</button></td>
                <td>
                    <div class="cart">
                        <p>Cart ({{ cart }})</p>   
                    </div>
                </td>
                </tr>
            </table>
        </div>
    </div>
    
    `,
    data() {
        return {
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
            
            }
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
            },
            shipping(){
                if(this.premium)
                    { return "Free" }
                else
                    { return 2.99 }
            }
            
        }
    
})





var app = new Vue({
    el: '#app',  
    data: {
        premium: true,
        
    }

})



