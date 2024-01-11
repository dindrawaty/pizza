// Add this script in your HTML file or include it in a separate JavaScript file

// Function to handle adding items to the cart
function addToCart(item) {
    /* console.log('addToCart function called'); // Add this line for debugging */

    const itemName = item.querySelector('h2').innerText;
    const itemPrice = parseFloat(item.dataset.price);

    /* console.log('Item:', itemName);
    console.log('Raw Price:', item.dataset.price);*/
    
    /* if (isNaN(itemPrice)) {
        console.error('Invalid price:', item.dataset.price);
        return; // Exit the function if the price is not a valid number
    }*/
    /* alert(`Item Price: ${item.dataset.price}`); */
       
    // Increment the order count
    const totalOrdersElement = document.getElementById('total-orders');
    let totalOrders = parseInt(totalOrdersElement.innerText);
    totalOrders++;

    totalOrdersElement.innerText = totalOrders;
    alert(`Total Orders: ${totalOrders}`);
   
    // Update the total price
    const totalPriceElement = document.getElementById('total-price');
    alert(totalPriceElement.textContent)
    //let totalPrice = parseFloat(totalPriceElement.innerText);
    let totalPrice = parseFloat(totalPriceElement.textContent);
    alert(`Total Price: ${totalPrice}`)
    totalPrice += itemPrice;
    alert(`Total Price: ${totalPrice}`)
    totalPriceElement.innerText = totalPrice.toFixed(2);
    

 };

 // Attach click event listeners to all "Add to Cart" buttons

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    /* alert(`hanya coba2`); */

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => addToCart(button.parentNode));
        //button.addEventListener('click', addToCart(button.parentNode))
    });
});



