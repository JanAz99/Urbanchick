document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const productName = button.parentNode.querySelector('h2').innerText;
        const productPrice = parseFloat(button.parentNode.querySelector('p').innerText.slice(1));
        const cartItem = document.createElement('li');
        cartItem.innerText = `${productName} - $${productPrice.toFixed(2)}`;
        cartItemsList.appendChild(cartItem);
        total += productPrice;
        totalElement.innerText = `Total: $${total.toFixed(2)}`;
      });
    });
  });
  