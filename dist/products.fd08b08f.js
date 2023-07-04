class ShoppingCart {
    constructor(){
        this.cartCount = 0;
        this.totalPrice = 0;
    }
    addToCart(productName, price) {
        this.prductName = productName;
        this.cartCount++;
        this.totalPrice += price;
        this.updateCartCount();
        this.updateTotal();
    }
    updateCartCount() {
        const cartCountElement = document.getElementById("cart-count");
        if (cartCountElement) cartCountElement.innerText = this.cartCount;
    }
    updateTotal() {
        const totalElement = document.getElementById("total");
        if (totalElement) totalElement.innerHTML = `<p>Total items: ${this.cartCount}</p>
                                              <p>Total price: $${this.totalPrice.toFixed(2)}</p>`;
    }
}
const shoppingCart = new ShoppingCart();
// Get all the "Buy now" buttons
const buyButtons = document.querySelectorAll("#buy-button");
// Attach event listener to each "Buy now" button
buyButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const productElement = button.parentNode;
        const productName = productElement.querySelector("h3").innerText;
        const price = parseFloat(productElement.querySelector("#price").innerText);
        shoppingCart.addToCart(productName, price);
    });
});

//# sourceMappingURL=products.fd08b08f.js.map
