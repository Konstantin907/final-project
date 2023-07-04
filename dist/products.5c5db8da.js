const product = document.querySelector("#product");
const price = document.querySelector("#price");
const shoppingCart = document.querySelector("#shopping-cart");
const buyBtn = document.querySelector("#buy-button");
class Shop {
    static addToCart(product) {
        App.shoppingCart.addToCart(product);
        App.renderTotal();
    }
}
Shop.shoppingCart = new ShoppingCart();

//# sourceMappingURL=products.5c5db8da.js.map
